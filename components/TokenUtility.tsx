const utilities = [
  "Premium intelligence access",
  "Advanced liquidity analytics",
  "AI query system access",
  "Staking participation",
  "API support",
  "Early feature access",
];

export default function TokenUtility() {
  return (
    <section className="section py-[140px] max-[760px]:py-[90px]" id="token">
      <div className="mx-auto grid w-[min(calc(100%-48px),1240px)] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[90px] max-[760px]:grid-cols-1 max-[760px]:gap-[50px]">
        <div className="max-w-[650px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">08</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            $DEEPT Utility
          </h2>
          <p className="mt-[30px] max-w-[600px] text-[16px] leading-[1.8] text-text-soft">
            $DEEPT powers access to the DEEPTRACE AI ecosystem. It
            functions strictly as a utility and access layer — not
            equity, ownership, dividends, or profit participation.
          </p>

          <div className="mt-[35px] grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {utilities.map((u) => (
              <div
                key={u}
                className="card-pulse-ring rounded-lg border border-border bg-card px-[18px] py-[18px] text-[13px] text-text-soft"
              >
                {u}
              </div>
            ))}
          </div>
        </div>

        <div className="media-zoom media-card relative min-h-[500px] overflow-hidden rounded-[20px] border border-border bg-card shadow-[inset_0_0_60px_rgba(255,255,255,0.015),0_30px_100px_rgba(0,0,0,0.35)] max-[760px]:min-h-[350px]">
          <img
            src="/assets/deept-token.svg"
            alt="$DEEPT token"
            className="h-full min-h-[500px] w-full object-cover max-[760px]:min-h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
