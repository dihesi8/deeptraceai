import DashboardShell from "@/components/dashboard/DashboardShell";
import { formatUsd, formatPct, formatTimeAgo } from "@/lib/format";
import tvlData from "@/data/tvl-data.json";

export const revalidate = 21600; // 6h — matches the cron cadence, no point rendering more often

export default function DashboardPage() {
  const { latest, snapshots, updatedAt } = tvlData as {
    latest: { totalTvlUsd: number; tokens: any[]; timestamp: string };
    snapshots: { timestamp: string; totalTvlUsd: number }[];
    updatedAt: string;
  };

  const prev = snapshots.length > 1 ? snapshots[snapshots.length - 2] : null;
  const change =
    prev && prev.totalTvlUsd > 0
      ? ((latest.totalTvlUsd - prev.totalTvlUsd) / prev.totalTvlUsd) * 100
      : 0;

  const topToken = [...latest.tokens].sort((a, b) => b.valueUsd - a.valueUsd)[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-10">
      <header className="mb-10 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 font-mono text-xs text-accent-light">ROBINHOOD CHAIN</div>
          <h1 className="font-display text-2xl text-text md:text-3xl">
            Token Supply &amp; Market Value
          </h1>
          <p className="mt-2 max-w-md text-[13px] text-text-muted">
            Tracked by DEEPTRACE AI&rsquo;s CORE and FLOW agents — token supply
            value and capital density across Robinhood Chain&rsquo;s tokenized
            asset ecosystem.
          </p>
        </div>
        <div className="font-mono text-xs text-text-muted">
          snapshot updated {formatTimeAgo(updatedAt)}
        </div>
      </header>

      <DashboardShell
        totalSupplyValue={formatUsd(latest.totalTvlUsd)}
        delta={prev ? formatPct(change) : undefined}
        deltaPositive={change >= 0}
        trackedTokens={String(latest.tokens.length)}
        topTokenSymbol={topToken ? topToken.symbol : "—"}
        topTokenValue={topToken ? formatUsd(topToken.valueUsd) : undefined}
        snapshots={snapshots}
        tokens={latest.tokens}
      />

      <footer className="mt-10 border-t border-border pt-6 font-mono text-xs text-text-muted">
        Data refreshed every 6h via GitHub Actions · Not affiliated with
        Robinhood Markets, Inc.
      </footer>
    </main>
  );
}
