export default function Waitlist() {
  return (
    <section
      className="relative flex min-h-[700px] items-center overflow-hidden max-[760px]:min-h-[600px]"
      id="waitlist"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/waitlist-background.svg"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-[rgba(3,3,5,0.7)] to-[rgba(3,3,5,0.2)]" />
      </div>

      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <p className="mb-[22px] text-[11px] uppercase tracking-[0.22em] text-accent-light">
          Early Access
        </p>

        <h2 className="font-display text-[clamp(56px,9vw,110px)] font-medium leading-[0.95] tracking-[-0.045em] max-[760px]:text-[70px]">
          JOIN
          <br />
          THE
          <br />
          WAITLIST
        </h2>

        <form className="mt-10 flex max-w-[480px] gap-3 max-[760px]:flex-col">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            required
            className="min-h-[52px] flex-1 rounded-lg border border-border bg-white/[0.04] px-5 text-white outline-none placeholder:text-text-muted max-[760px]:w-full"
          />
          <button
            type="submit"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-accent to-accent-dark px-[30px] text-[13px] font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(168,85,247,0.32)]"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
