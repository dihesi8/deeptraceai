export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden max-[760px]:min-h-[850px]"
    >
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-70"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3GJaYKPxdnQG0Q9O26lu6DPmcHu/hf_20260805_192612_e00017a8-56b0-4957-935b-9ffd87663994.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-[rgba(3,3,5,0.65)] to-[rgba(3,3,5,0.15)]" />
      </div>

      <div className="mx-auto w-[min(calc(100%-48px),1240px)] pt-20">
        <div className="max-w-[780px] animate-fadeUp">
          <p className="mb-[22px] text-[11px] uppercase tracking-[0.22em] text-accent-light">
            Cross-Chain Liquidity Intelligence
          </p>

          <h1 className="font-display text-[clamp(60px,8vw,116px)] font-medium leading-[0.92] tracking-[-0.065em] max-[760px]:text-[clamp(54px,15vw,85px)]">
            Trace The
            <br />
            Hidden Fragment<span className="text-accent-light">_</span>
          </h1>

          <p className="mt-[30px] mb-[38px] text-[18px] text-text-soft max-[760px]:text-[15px]">
            Cross-Chain Liquidity Intelligence Layer
          </p>

          <a
            href="/dashboard"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-accent to-accent-dark px-[30px] text-[13px] font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(168,85,247,0.32)]"
          >
            Launch App
          </a>
        </div>
      </div>

      {/* Animated bottom treatment */}
      <div className="hero-bottom-wave">
        <svg viewBox="0 0 2400 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 C 200,40 400,140 600,90 C 800,40 1000,140 1200,90 C 1400,40 1600,140 1800,90 C 2000,40 2200,140 2400,90 L2400,140 L0,140 Z"
            fill="url(#waveGrad)"
          />
        </svg>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <svg
          className="animate-bounceChevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
