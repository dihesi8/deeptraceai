export default function ComingSoonPanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-border bg-card px-8 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.4)] bg-[rgba(168,85,247,0.08)] px-4 py-[7px] text-[11px] uppercase tracking-[0.14em] text-accent-light">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-light" />
        </span>
        Coming Soon
      </span>
      <h2 className="mt-5 font-display text-2xl text-text">{title}</h2>
      <p className="mt-3 max-w-[420px] text-[13px] leading-[1.7] text-text-muted">
        {description}
      </p>
    </div>
  );
}
