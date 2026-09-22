const numberCards = [
  { n: "01", title: "Attention attracts liquidity" },
  { n: "02", title: "Liquidity creates momentum" },
  { n: "03", title: "Momentum creates expansion" },
];

const tags = [
  "Cross-chain flows",
  "Stablecoin rotation",
  "DEX liquidity shifts",
  "Ecosystem flows",
  "Sector momentum",
  "Capital migration",
];

export default function Thesis() {
  return (
    <section className="relative py-[140px] max-[760px]:py-[90px] [background:radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.08),transparent_30%)]">
      <div className="mx-auto grid w-[min(calc(100%-48px),1240px)] grid-cols-[1.15fr_0.85fr] gap-[100px] max-[760px]:grid-cols-1 max-[760px]:gap-[50px]">
        <div>
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">02</span>
          <h2 className="font-display text-[clamp(34px,4vw,55px)] font-medium leading-none tracking-[-0.045em]">
            Liquidity moves before narratives.
            <br />
            Narratives move before price.
          </h2>
          <p className="mt-7 text-[16px] leading-[1.8] text-text-soft">
            Most crypto platforms analyze price. DEEPTRACE AI analyzes
            where money moves before price reacts — detecting liquidity
            entry, exit, chain momentum, sector accumulation, and
            stablecoin rotation before broader market awareness.
          </p>

          <div className="mt-[55px] grid grid-cols-3 border-t border-border max-[760px]:grid-cols-1">
            {numberCards.map((c, i) => (
              <div
                key={c.n}
                className={`card-underline px-5 py-[25px] ${
                  i !== numberCards.length - 1
                    ? "border-r border-border max-[760px]:border-r-0 max-[760px]:border-b"
                    : ""
                }`}
              >
                <span className="num mb-[35px] block text-[11px] text-accent-light">{c.n}</span>
                <h3 className="text-[15px] leading-[1.4]">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-[clamp(34px,4vw,55px)] font-medium leading-none tracking-[-0.045em]">
            Continuously Monitored
          </h2>
          <p className="mt-7 text-[16px] leading-[1.8] text-text-soft">
            DEEPTRACE AI runs persistent surveillance across wallet flows,
            stablecoin rotation, DEX liquidity shifts, ecosystem inflows,
            and cross-chain capital migration. Bridge corridors, liquidity
            velocity, and sector rotation are tracked in real time —
            correlated into unified signal streams, not lagging price
            indicators.
          </p>

          <div className="mt-[35px] grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {tags.map((t) => (
              <span
                key={t}
                className="tag-fill rounded-lg border border-border bg-card px-[15px] py-[15px] text-[12px] text-text-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
