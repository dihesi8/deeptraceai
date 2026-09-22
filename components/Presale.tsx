const stats = [
  { label: "Presale Price", value: "TBA" },
  { label: "Allocation", value: "TBA" },
  { label: "Opens", value: "TBA" },
];

export default function Presale() {
  return (
    <section
      className="section relative overflow-hidden py-[140px] max-[760px]:py-[90px]"
      id="presale"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="relative overflow-hidden rounded-[24px] border border-[rgba(168,85,247,0.25)] bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-[60px] max-[760px]:p-[30px]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-[rgba(168,85,247,0.18)] blur-[100px]" />

          <div className="relative max-w-[620px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.4)] bg-[rgba(168,85,247,0.08)] px-4 py-[7px] text-[11px] uppercase tracking-[0.14em] text-accent-light">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-light" />
              </span>
              Coming Soon
            </span>

            <h2 className="mt-6 font-display text-[clamp(34px,4.5vw,58px)] font-medium leading-none tracking-[-0.045em]">
              $DEEPT Presale
            </h2>

            <p className="mt-6 text-[16px] leading-[1.8] text-text-soft">
              Early access to $DEEPT is being finalized. Presale terms,
              allocation tiers, and the opening date will be announced to
              the waitlist first — before any public listing.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-[10px] max-[500px]:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-black/20 px-4 py-4"
                >
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                    {s.label}
                  </div>
                  <div className="font-mono text-[15px] text-text-soft">{s.value}</div>
                </div>
              ))}
            </div>

            <form
              className="mt-9 flex max-w-[460px] gap-3 max-[540px]:flex-col"
              aria-label="Get notified when the $DEEPT presale opens"
            >
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                disabled
                className="min-h-[50px] flex-1 cursor-not-allowed rounded-lg border border-border bg-white/[0.03] px-5 text-text-muted outline-none placeholder:text-text-muted max-[540px]:w-full"
              />
              <button
                type="button"
                disabled
                data-cursor-hover
                className="inline-flex min-h-[50px] cursor-not-allowed items-center justify-center rounded-lg border border-border bg-white/[0.04] px-[26px] text-[13px] font-semibold text-text-muted"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-3 text-[12px] text-text-muted">
              Already on the{" "}
              <a href="#waitlist" className="text-accent-light hover:underline">
                general waitlist
              </a>
              ? You&rsquo;ll be notified automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
