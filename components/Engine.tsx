export default function Engine() {
  return (
    <section className="section relative py-[140px] max-[760px]:py-[90px]">
      <div className="mx-auto grid w-[min(calc(100%-48px),1240px)] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-[90px] max-[760px]:grid-cols-1 max-[760px]:gap-[50px]">
        <div className="max-w-[650px]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] text-accent-light">04</span>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] font-medium leading-none tracking-[-0.045em]">
            Liquidity Intelligence Engine
          </h2>
          <p className="mt-[30px] max-w-[600px] text-[16px] leading-[1.8] text-text-soft">
            Real-time multi-chain intelligence — ecosystem inflow
            velocity, liquidity concentration, capital migration
            patterns, and behavioral synchronization transformed into
            predictive models.
          </p>

          <div className="mt-[50px]">
            <article className="card-accent-bar border-t border-border py-[25px]">
              <h3 className="mb-3 font-display text-[20px]">
                Blockchain Liquidity Corridors
              </h3>
              <p className="text-[14px] text-text-soft">
                Track liquidity movement across Robinhood Chain and other
                major blockchain ecosystems. Monitor inflow velocity,
                bridge corridors, and capital rotation as value moves
                between networks — before broader market awareness forms.
              </p>
            </article>

            <article className="card-accent-bar border-t border-border py-[25px]">
              <h3 className="mb-3 font-display text-[20px]">
                Pre-Narrative Capital Flow
              </h3>
              <p className="text-[14px] text-text-soft">
                Structural insights into where capital is moving before
                narratives form. Detect coordinated accumulation and
                migration patterns invisible to traditional market tools.
              </p>
            </article>
          </div>
        </div>

        <div className="media-zoom media-card sticky top-[100px] min-h-[500px] self-start overflow-hidden rounded-[20px] border border-border bg-card shadow-[inset_0_0_60px_rgba(255,255,255,0.015),0_30px_100px_rgba(0,0,0,0.35)] max-[760px]:static max-[760px]:min-h-[350px]">
          <img
            src="/assets/intelligence-engine.svg"
            alt="Liquidity intelligence engine"
            className="h-full min-h-[500px] w-full object-cover max-[760px]:min-h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
