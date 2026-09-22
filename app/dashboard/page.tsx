import StatCard from "@/components/dashboard/StatCard";
import TVLChart from "@/components/dashboard/TVLChart";
import PoolTable from "@/components/dashboard/PoolTable";
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
            Liquidity &amp; Capital Depth
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

      <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="TOTAL SUPPLY VALUE"
          value={formatUsd(latest.totalTvlUsd)}
          delta={prev ? formatPct(change) : undefined}
          deltaPositive={change >= 0}
          accent
        />
        <StatCard label="TRACKED TOKENS" value={String(latest.tokens.length)} />
        <StatCard
          label="TOP TOKEN"
          value={topToken ? topToken.symbol : "—"}
          delta={topToken ? formatUsd(topToken.valueUsd) : undefined}
          deltaPositive
        />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TVLChart snapshots={snapshots} />
        </div>
        <div className="lg:col-span-1">
          <PoolTable tokens={latest.tokens} />
        </div>
      </section>

      <footer className="mt-10 border-t border-border pt-6 font-mono text-xs text-text-muted">
        Data refreshed every 6h via GitHub Actions · Not affiliated with
        Robinhood Markets, Inc.
      </footer>
    </main>
  );
}
