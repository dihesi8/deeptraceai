"use client";

import { useState } from "react";
import StatCard from "@/components/dashboard/StatCard";
import TVLChart from "@/components/dashboard/TVLChart";
import PoolTable from "@/components/dashboard/PoolTable";
import ComingSoonPanel from "@/components/dashboard/ComingSoonPanel";

type TokenRow = {
  id: string;
  label: string;
  symbol: string;
  totalSupply: number;
  price: number;
  valueUsd: number;
};

type Props = {
  totalSupplyValue: string;
  delta?: string;
  deltaPositive: boolean;
  trackedTokens: string;
  topTokenSymbol: string;
  topTokenValue?: string;
  snapshots: { timestamp: string; totalTvlUsd: number }[];
  tokens: TokenRow[];
};

const navItems = [
  { id: "overview", label: "Overview", live: true },
  { id: "presale", label: "Buy $DEEPT", live: false },
  { id: "search-flow", label: "Search for Flow", live: false },
  { id: "staking", label: "Staking", live: false },
  { id: "tokens", label: "Tokens", live: false },
  { id: "agents", label: "Agents", live: false },
  { id: "api", label: "API Access", live: false },
] as const;

type NavId = (typeof navItems)[number]["id"];

const panels: Record<Exclude<NavId, "overview">, { title: string; description: string }> = {
  presale: {
    title: "Buy $DEEPT",
    description:
      "Presale access for $DEEPT is being finalized. Terms, allocation tiers, and the opening date will go to the waitlist first — see the Presale section on the main site.",
  },
  "search-flow": {
    title: "Search for Flow",
    description:
      "A natural-language search over live liquidity flows tracked by the FLOW and VECTOR agents — query capital movement across chains directly from the dashboard.",
  },
  staking: {
    title: "Staking",
    description:
      "Stake $DEEPT to unlock premium intelligence tiers, advanced analytics, and priority access to new agent releases.",
  },
  tokens: {
    title: "Tokens",
    description:
      "A full directory of every tokenized asset DEEPTRACE AI tracks on Robinhood Chain, with per-token supply, price, and flow history.",
  },
  agents: {
    title: "Agents",
    description:
      "Live status and confidence scores for all six DEEPTRACE AI agents — FLOW, CORE, VECTOR, ORBIT, VEIL, and ROTOR — in one place.",
  },
  api: {
    title: "API Access",
    description:
      "Generate and manage institutional API keys for programmatic access to confidence-weighted liquidity intelligence.",
  },
};

export default function DashboardShell({
  totalSupplyValue,
  delta,
  deltaPositive,
  trackedTokens,
  topTokenSymbol,
  topTokenValue,
  snapshots,
  tokens,
}: Props) {
  const [active, setActive] = useState<NavId>("overview");

  return (
    <div className="grid grid-cols-[200px_1fr] gap-[15px] max-[900px]:grid-cols-1">
      <div className="flex flex-col gap-[7px] max-[900px]:grid max-[900px]:grid-cols-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center justify-between gap-2 rounded-lg border px-[17px] py-[15px] text-left text-[12px] transition-colors ${
              active === item.id
                ? "border-[rgba(168,85,247,0.45)] bg-[rgba(168,85,247,0.08)] text-white"
                : "border-border bg-transparent text-text-muted hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.08)] hover:text-white"
            }`}
          >
            {item.label}
            {!item.live && (
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-light opacity-70" />
            )}
          </button>
        ))}

        <a
          href="/"
          className="mt-2 rounded-lg border border-border px-[17px] py-[15px] text-left text-[12px] text-text-muted transition-colors hover:border-border-bright hover:text-text max-[900px]:col-span-2"
        >
          ← Back to Website
        </a>
      </div>

      <div>
        {active === "overview" ? (
          <>
            <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatCard
                label="TOTAL SUPPLY VALUE"
                value={totalSupplyValue}
                delta={delta}
                deltaPositive={deltaPositive}
                accent
              />
              <StatCard label="TRACKED TOKENS" value={trackedTokens} />
              <StatCard
                label="TOP TOKEN"
                value={topTokenSymbol}
                delta={topTokenValue}
                deltaPositive
              />
            </section>

            <div className="mb-6 flex items-center gap-3 rounded-xl border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.06)] px-5 py-4">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-light" />
              </span>
              <p className="text-[13px] text-text-soft">
                AI integration and more features coming soon.
              </p>
            </div>

            <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TVLChart snapshots={snapshots} />
              </div>
              <div className="lg:col-span-1">
                <PoolTable tokens={tokens} />
              </div>
            </section>
          </>
        ) : (
          <ComingSoonPanel {...panels[active]} />
        )}
      </div>
    </div>
  );
}
