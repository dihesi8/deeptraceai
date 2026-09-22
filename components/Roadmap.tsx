const items = [
  { n: "01", title: "Foundation" },
  { n: "02", title: "Presale Traction" },
  { n: "03", title: "TGE & Market Listings" },
  { n: "04", title: "Autonomous Cross-Chain Intelligence" },
];

export default function Roadmap() {
  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="roadmap">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="mb-[65px] max-w-[760px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">10</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            $DEEPT Token
          </h2>
          <p className="mt-[30px] text-[16px] leading-[1.8] text-text-soft">Ecosystem Roadmap</p>
          <p className="mt-2 text-[16px] leading-[1.8] text-text-soft">
            From foundation and presale traction to TGE, market listings,
            and autonomous cross-chain intelligence — a phased path
            across four stages.
          </p>
        </div>

        <div className="relative grid grid-cols-4 gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-[35px] max-[760px]:pl-5">
          <div className="absolute left-0 right-0 top-[10px] h-px bg-border max-[760px]:bottom-0 max-[760px]:left-[34px] max-[760px]:right-auto max-[760px]:top-0 max-[760px]:h-auto max-[760px]:w-px" />
          {items.map((item) => (
            <article
              key={item.n}
              className="roadmap-item relative flex flex-col gap-6 max-[760px]:flex-row max-[760px]:items-center"
            >
              <span className="roadmap-dot relative z-10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-accent-light bg-bg text-[10px] text-accent-light">
                {item.n}
              </span>
              <h3 className="text-[16px]">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
