"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#agents", label: "Agents" },
  { href: "#product", label: "Product" },
  { href: "#token", label: "Token" },
  { href: "#presale", label: "Presale" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#terminal", label: "AI Terminal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-[1000] w-full border-b border-white/5 bg-bg/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-[82px] w-[min(calc(100%-48px),1240px)] items-center justify-between gap-8 max-[760px]:h-[70px]">
        <a href="#home" className="flex items-center" aria-label="DEEPTRACE AI — Home">
          <img src="/assets/logo.svg" alt="DEEPTRACE AI" className="h-7 w-auto" />
        </a>

        <nav
          className={`flex items-center gap-6 max-[1050px]:gap-3.5 max-[760px]:absolute max-[760px]:left-[15px] max-[760px]:right-[15px] max-[760px]:top-[70px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:rounded-xl max-[760px]:border max-[760px]:border-border max-[760px]:bg-[rgba(8,8,12,0.96)] max-[760px]:p-4 max-[760px]:backdrop-blur-2xl ${
            open ? "max-[760px]:flex" : "max-[760px]:hidden"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[13px] text-text-soft transition-colors hover:text-text max-[1050px]:text-[11px] max-[760px]:p-3.5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/dashboard"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-accent to-accent-dark px-[22px] text-[13px] font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(168,85,247,0.32)] max-[760px]:hidden"
        >
          Launch App
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="hidden h-[42px] w-[42px] items-center justify-center rounded-lg border border-border bg-transparent max-[760px]:flex"
        >
          <div className="space-y-1">
            <span className="block h-px w-[18px] bg-white" />
            <span className="block h-px w-[18px] bg-white" />
            <span className="block h-px w-[18px] bg-white" />
          </div>
        </button>
      </div>
    </header>
  );
}
