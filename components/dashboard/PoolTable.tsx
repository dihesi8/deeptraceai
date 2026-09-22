import { formatUsd } from "@/lib/format";

type TokenRow = {
  id: string;
  label: string;
  symbol: string;
  totalSupply: number;
  price: number;
  valueUsd: number;
};

export default function PoolTable({ tokens }: { tokens: TokenRow[] }) {
  const sorted = [...tokens].sort((a, b) => b.valueUsd - a.valueUsd);

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="p-5 pb-0 text-xs tracking-wide text-text-muted">TOKEN SUPPLY VALUE</div>
      <div className="scroll-x">
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="border-b border-t border-border text-left font-mono text-xs text-text-muted">
              <th className="px-5 py-2 font-normal">Token</th>
              <th className="px-5 py-2 text-right font-normal">Total Supply</th>
              <th className="px-5 py-2 text-right font-normal">Price</th>
              <th className="px-5 py-2 text-right font-normal">Value</th>
            </tr>
          </thead>
          <tbody className="tabular font-mono">
            {sorted.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-b-0">
                <td className="px-5 py-3 text-text">{t.symbol}</td>
                <td className="px-5 py-3 text-right text-text-muted">
                  {t.totalSupply.toLocaleString()}
                </td>
                <td className="px-5 py-3 text-right text-text-muted">${t.price.toFixed(2)}</td>
                <td className="px-5 py-3 text-right text-text">{formatUsd(t.valueUsd)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
