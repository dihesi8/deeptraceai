"use client";

import { useState } from "react";

const tabs = ["Dataship", "Orbit", "AI Terminal", "API"] as const;
type Tab = (typeof tabs)[number];

const content: Record<Tab, { label: string; title: string; body: string }> = {
  Dataship: {
    label: "INTELLIGENCE DATA PIPELINE",
    title: "Dataship",
    body: "Dataship ingests and normalizes cross-chain liquidity telemetry — stablecoin flows, bridge activity, DEX shifts, and sector momentum — feeding Orbit alerts, AI Terminal queries, and institutional API endpoints in real time.",
  },
  Orbit: {
    label: "ALERT SYSTEM",
    title: "Orbit",
    body: "Orbit routes intelligence signals through Telegram delivery, mobile notifications, and email — surfacing capital rotation before broader market recognition.",
  },
  "AI Terminal": {
    label: "ASK IN AI TERMINAL",
    title: "AI Terminal",
    body: "The AI Terminal sends your natural-language questions to six specialized intelligence agents — Consensus unifies their outputs into one confidence-weighted answer.",
  },
  API: {
    label: "INSTITUTIONAL API",
    title: "API",
    body: "API uplinks all six agents into one institutional delivery layer — structured, AI-interpreted liquidity intelligence for funds, desks, builders, and automated systems. Not raw data — confidence-weighted outputs.",
  },
};

const cards = [
  {
    title: "Orbit",
    tag: "Alert System",
    body: "Orbit routes intelligence signals through Telegram delivery, mobile notifications, and email — surfacing capital rotation before broader market recognition.",
    quote: "Liquidity rotation detected from Solana ecosystem toward Robinhood Chain.",
  },
  {
    title: "AI Terminal",
    tag: "Ask in AI Terminal",
    body: "The AI Terminal sends your natural-language questions to six specialized intelligence agents — Consensus unifies their outputs into one confidence-weighted answer.",
    quote: "Which ecosystem shows the highest stablecoin inflow acceleration?",
  },
  {
    title: "API",
    tag: "Institutional API",
    body: "API uplinks all six agents into one institutional delivery layer — structured, AI-interpreted liquidity intelligence for funds, desks, builders, and automated systems. Not raw data — confidence-weighted outputs.",
    quote: null,
  },
];

export default function Delivery() {
  const [active, setActive] = useState<Tab>("Dataship");
  const c = content[active];

  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="terminal">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="mb-[65px] max-w-[760px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">06</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            Four Delivery Layers
          </h2>
          <p className="mt-[30px] text-[16px] leading-[1.8] text-text-soft">
            Real-time liquidity intelligence — delivered through data
            pipeline, alerts, natural language queries, and
            institutional API access.
          </p>
        </div>

        <div className="grid grid-cols-[200px_1fr_1fr] items-stretch gap-[15px] max-[1050px]:grid-cols-[180px_1fr] max-[760px]:grid-cols-1">
          <div className="flex flex-col gap-[7px] max-[1050px]:col-span-1 max-[760px]:grid max-[760px]:grid-cols-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-lg border px-[17px] py-[17px] text-left text-[12px] transition-colors ${
                  active === t
                    ? "border-[rgba(168,85,247,0.45)] bg-[rgba(168,85,247,0.08)] text-white"
                    : "border-border bg-transparent text-text-muted hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.08)] hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="rounded-[20px] border border-border bg-card p-[45px] max-[760px]:p-[30px]">
            <span className="text-[11px] tracking-[0.1em] text-accent-light">{c.label}</span>
            <h3 className="my-4 font-display text-[28px]">{c.title}</h3>
            <p className="text-[14px] leading-[1.8] text-text-soft">{c.body}</p>
          </div>

          <div className="media-zoom media-card min-h-[300px] overflow-hidden rounded-[20px] border border-border bg-card max-[1050px]:col-span-2 max-[760px]:col-span-1">
            <img
              src="/assets/delivery-layer.svg"
              alt="DEEPTRACE AI delivery layer"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-[14px] grid grid-cols-3 gap-[14px] max-[760px]:grid-cols-1">
          {cards.map((card) => (
            <article
              key={card.title}
              className="card-tilt rounded-[20px] border border-border bg-card p-[30px]"
            >
              <h3 className="mb-1 font-display text-[20px]">{card.title}</h3>
              <span className="text-[11px] text-accent-light">{card.tag}</span>
              <p className="mt-4 text-[13px] leading-[1.7] text-text-soft">{card.body}</p>
              {card.quote && (
                <blockquote className="mt-5 border-l-2 border-accent/50 pl-4 text-[13px] italic text-text-muted">
                  {card.quote}
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
