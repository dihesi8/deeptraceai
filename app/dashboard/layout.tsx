import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquidity Dashboard",
  description:
    "Live token supply value and liquidity depth tracking across Robinhood Chain's tokenized asset ecosystem, powered by DEEPTRACE AI.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-[70px] w-[min(calc(100%-48px),1240px)] items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="DEEPTRACE AI — Home">
            <img src="/assets/logo.svg" alt="DEEPTRACE AI" className="h-6 w-auto" />
          </a>
          <a
            href="/"
            className="text-[12px] text-text-soft transition-colors hover:text-text"
          >
            ← Back to site
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
