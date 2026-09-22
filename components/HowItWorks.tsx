const steps = [
  {
    i: "01",
    title: "Data Layer",
    desc: "Collects multi-blockchain transactions, DEX swaps, stablecoin transfers, bridge activity, wallet movements, and liquidity pool changes.",
  },
  {
    i: "02",
    title: "Agent Layer",
    desc: "Six specialized AI agents analyze distinct dimensions of liquidity behavior across ecosystems.",
  },
  {
    i: "03",
    title: "Consensus Layer",
    desc: "All agents generate confidence-weighted outputs combined into a unified liquidity prediction model.",
  },
  {
    i: "04",
    title: "Output Layer",
    desc: "Intelligence delivered through Telegram alerts, mobile notifications, AI Terminal, and institutional API access.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="product">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="mb-[65px] max-w-[760px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">03</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            How DEEPTRACE AI Works
          </h2>
          <p className="mt-[30px] text-[16px] leading-[1.8] text-text-soft">
            Four integrated layers transform raw blockchain activity into
            predictive liquidity intelligence.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[14px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1">
          {steps.map((s) => (
            <article
              key={s.i}
              className="card-sweep min-h-[330px] rounded-[20px] border border-border bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-[30px] max-[760px]:min-h-[260px]"
            >
              <span className="mb-[100px] block text-[11px] text-accent-light max-[760px]:mb-[65px]">
                {s.i}
              </span>
              <h3 className="mb-4 font-display text-[22px]">{s.title}</h3>
              <p className="text-[13px] leading-[1.7] text-text-soft">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
