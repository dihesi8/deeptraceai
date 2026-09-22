"use client";

import { useState } from "react";

const agentData = {
  flow: {
    title: "FLOW AGENT",
    description:
      "Tracks cross-chain inflows, outflows, and liquidity acceleration across supported networks. Maps capital direction before charts or narrative cycles react.",
    image: "/assets/flow-agent.svg",
  },
  core: {
    title: "CORE AGENT",
    description:
      "Monitors stablecoin concentration, liquidity depth, and capital density across ecosystems. Tracks reserve aggregation before directional expansion signals emerge.",
    image: "/assets/core-agent.svg",
  },
  vector: {
    title: "VECTOR AGENT",
    description:
      "Measures liquidity momentum, acceleration strength, and persistence across ecosystems. Scores expansion probability before velocity reaches market consensus.",
    image: "/assets/vector-agent.svg",
  },
  orbit: {
    title: "ORBIT AGENT",
    description:
      "Forecasts where liquidity migrates across blockchain ecosystems next. Maps destination corridors before broader participation and narrative consensus form.",
    image: "/assets/orbit-agent.svg",
  },
  veil: {
    title: "VEIL AGENT",
    description:
      "Detects stealth accumulation and coordinated wallet clustering in fragmented patterns. Surfaces obfuscated capital flows before broader market recognition.",
    image: "/assets/veil-agent.svg",
  },
  rotor: {
    title: "ROTOR AGENT",
    description:
      "Detects rotation across AI, memecoins, gaming, DeFi, and infrastructure sectors. Flags capital shifts before narrative cycles and price action accelerate.",
    image: "/assets/rotor-agent.svg",
  },
} as const;

type AgentKey = keyof typeof agentData;

const secondaryCards: AgentKey[] = ["core", "vector", "orbit", "veil", "rotor"];

export default function Agents() {
  const [active, setActive] = useState<AgentKey>("flow");
  const [changing, setChanging] = useState(false);
  const agent = agentData[active];

  const select = (key: AgentKey) => {
    if (key === active) return;
    setChanging(true);
    setTimeout(() => {
      setActive(key);
      setChanging(false);
    }, 180);
  };

  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="agents">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="mb-[65px] max-w-[760px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">05</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            Six Agent Units
          </h2>
          <p className="mt-[30px] text-[16px] leading-[1.8] text-text-soft">
            Each agent specializes in a distinct layer of liquidity
            behavior. Outputs feed into a consensus intelligence layer
            for confidence-weighted liquidity forecasts.
          </p>
        </div>

        <div className="grid grid-cols-[220px_1fr] gap-[15px] max-[760px]:grid-cols-1">
          <div className="flex flex-col gap-[7px] max-[760px]:grid max-[760px]:grid-cols-2">
            {(Object.keys(agentData) as AgentKey[]).map((key) => (
              <button
                key={key}
                onClick={() => select(key)}
                className={`rounded-lg border px-[17px] py-[17px] text-left text-[12px] transition-colors ${
                  active === key
                    ? "border-[rgba(168,85,247,0.45)] bg-[rgba(168,85,247,0.08)] text-white"
                    : "border-border bg-transparent text-text-muted hover:border-[rgba(168,85,247,0.45)] hover:bg-[rgba(168,85,247,0.08)] hover:text-white"
                }`}
              >
                {agentData[key].title}
              </button>
            ))}
          </div>

          <div className="grid min-h-[480px] grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-[20px] border border-border bg-card max-[760px]:min-h-[600px] max-[760px]:grid-cols-1">
            <div
              className={`self-center p-[55px] transition-all duration-200 ${
                changing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
              } max-[760px]:p-9`}
            >
              <span className="text-[10px] tracking-[0.15em] text-accent-light">
                ACTIVE AGENT
              </span>
              <h3 className="my-5 font-display text-[45px] max-[760px]:text-[38px]">
                {agent.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-text-soft">{agent.description}</p>
            </div>

            <div
              className={`media-zoom overflow-hidden transition-all duration-200 max-[760px]:min-h-[300px] ${
                changing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <img
                src={agent.image}
                alt={`${agent.title} visualization`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-[10px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1">
          {secondaryCards.map((key) => (
            <article
              key={key}
              className="card-slide-accent rounded-xl border border-border bg-card p-[22px]"
            >
              <h3 className="mb-5 text-[13px] text-accent-light">{agentData[key].title}</h3>
              <p className="text-[12px] leading-[1.7] text-text-soft">
                {agentData[key].description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
