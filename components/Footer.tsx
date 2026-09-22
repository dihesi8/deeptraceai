export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#020203] px-0 pb-[30px] pt-[90px]">
      <div className="mx-auto w-[min(calc(100%-48px),1240px)]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] border-b-0 pb-[70px] max-[1050px]:grid-cols-[2fr_1fr_1fr] max-[760px]:grid-cols-2 max-[760px]:gap-x-[25px] max-[760px]:gap-y-[45px]">
          <div className="max-[760px]:col-span-2">
            <img src="/assets/logo.svg" alt="DEEPTRACE AI" className="mb-5 h-8 w-auto" />
            <p className="max-w-[300px] text-[13px] text-text-muted">
              Cross-Chain Liquidity Intelligence Layer
            </p>
            <p className="mt-[25px] text-text-soft">
              &ldquo;Trace the hided fragment.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-[12px] uppercase tracking-[0.12em] text-white">Platform</h4>
            <a href="#home" className="text-[12px] text-text-muted transition-colors hover:text-white">Home</a>
            <a href="#agents" className="text-[12px] text-text-muted transition-colors hover:text-white">Agents</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">API Access</a>
            <a href="#roadmap" className="text-[12px] text-text-muted transition-colors hover:text-white">Roadmap</a>
            <a href="#waitlist" className="text-[12px] text-text-muted transition-colors hover:text-white">Waitlist</a>
            <a href="#terminal" className="text-[12px] text-text-muted transition-colors hover:text-white">AI Terminal</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Leaderboard</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-[12px] uppercase tracking-[0.12em] text-white">$DEEPT Token</h4>
            <a href="#presale" className="text-[12px] text-text-muted transition-colors hover:text-white">Presale</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Referral Program</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Ambassador Program</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Legal</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-[12px] uppercase tracking-[0.12em] text-white">Resources</h4>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Whitepaper</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Blog</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Tokenomics</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Audit</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Terms and Conditions</a>
            <a href="#" className="text-[12px] text-text-muted transition-colors hover:text-white">Privacy Policy</a>
          </div>
        </div>

        <div className="border-t border-border py-[25px]">
          <p className="max-w-[900px] text-[11px] leading-[1.7] text-text-muted">
            Disclaimer: Digital assets and crypto markets involve
            substantial risk. DEEPTRACE AI TOKEN ($DEEPT) does not
            guarantee any profit, return, or listing performance; market
            prices are volatile and outcomes are uncertain. DEEPTRACE AI
            intelligence outputs are analytical tools — not financial
            advice. Past liquidity patterns do not guarantee future
            results.
          </p>
        </div>

        <div className="flex items-center justify-between pt-[25px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
          <p className="text-[10px] tracking-[0.08em] text-text-muted">
            © 2026 DEEPTRACE AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_10px_#65ffb2]" />
            SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
