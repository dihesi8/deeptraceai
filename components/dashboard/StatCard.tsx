type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  accent?: boolean;
};

export default function StatCard({ label, value, delta, deltaPositive, accent }: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-border p-5 transition-colors hover:border-border-bright ${
        accent ? "bg-card" : "bg-transparent"
      }`}
    >
      <div className="mb-2 text-xs tracking-wide text-text-muted">{label}</div>
      <div className="font-mono tabular text-2xl text-text md:text-3xl">{value}</div>
      {delta && (
        <div
          className={`tabular mt-2 font-mono text-xs ${
            deltaPositive ? "text-green" : "text-rose"
          }`}
        >
          {delta}
        </div>
      )}
    </div>
  );
}
