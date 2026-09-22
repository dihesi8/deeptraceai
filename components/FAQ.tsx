const faqs = [
  {
    q: "What is DEEPTRACE AI designed to do?",
    a: "DEEPTRACE AI is a cross-chain liquidity intelligence layer that maps emerging capital movement across blockchain ecosystems — stablecoin flows, bridge corridors, DEX shifts, and sector momentum — before broader market recognition. It transforms fragmented on-chain activity into predictive intelligence through a multi-agent AI architecture, not conventional price-chart analytics.",
  },
  {
    q: "What problem does liquidity asymmetry create?",
    a: "DEEPTRACE AI is a cross-chain liquidity intelligence layer that maps emerging capital movement across blockchain ecosystems — stablecoin flows, bridge corridors, DEX shifts, and sector momentum — before broader market recognition. It transforms fragmented on-chain activity into predictive intelligence through a multi-agent AI architecture, not conventional price-chart analytics.",
  },
  {
    q: "How do the six specialized agents work?",
    a: "Six specialized agents — FLOW, CORE, VECTOR, ORBIT, VEIL, and ROTOR — each analyze a distinct dimension of liquidity behavior. Their confidence-weighted outputs feed a consensus layer that produces unified intelligence forecasts rather than relying on a single isolated indicator.",
  },
  {
    q: "How is intelligence delivered to users?",
    a: "DEEPTRACE AI exposes intelligence through four delivery layers: Dataship (cross-chain data ingestion), Orbit (mobile alert routing), AI Terminal (natural-language query interface), and Institutional API for programmatic integration.",
  },
  {
    q: "Which ecosystems does DEEPTRACE AI observe?",
    a: "The platform is built on Robinhood Chain as the primary ecosystem while continuously monitoring Solana, Arbitrum, BNB Chain, Optimism, and additional networks over time. Cross-chain coverage is core to identifying capital rotation between ecosystems.",
  },
];

export default function FAQ() {
  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="faq">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="mb-[65px] max-w-[760px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">11</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            FAQ
          </h2>
          <p className="mt-[30px] text-[16px] leading-[1.8] text-text-soft">
            Answers on the DEEPTRACE AI platform, $DEEPT utility, presale
            participation, intelligence outputs, and ecosystem access.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card px-6 py-5 open:bg-card-hover"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] max-[760px]:text-[15px]">
                {f.q}
                <span className="ml-4 text-accent-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[14px] leading-[1.8] text-text-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
