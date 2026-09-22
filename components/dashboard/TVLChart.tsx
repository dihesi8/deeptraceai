"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type Snapshot = {
  timestamp: string;
  totalTvlUsd: number;
};

export default function TVLChart({ snapshots }: { snapshots: Snapshot[] }) {
  const data = snapshots.map((s) => ({
    time: new Date(s.timestamp).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
    tvl: s.totalTvlUsd,
  }));

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 text-xs tracking-wide text-text-muted">TOTAL TVL — HISTORY</div>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.09)" strokeDasharray="0" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#a5a5ae"
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.09)" }}
              minTickGap={24}
            />
            <YAxis
              stroke="#a5a5ae"
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => (v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v}`)}
              width={56}
            />
            <Tooltip
              contentStyle={{
                background: "#030305",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 8,
                fontFamily: "JetBrains Mono",
                fontSize: 12,
              }}
              labelStyle={{ color: "#a5a5ae" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "TVL"]}
            />
            <Line
              type="monotone"
              dataKey="tvl"
              stroke="#c084fc"
              strokeWidth={1.75}
              dot={false}
              activeDot={{ r: 3, fill: "#c084fc" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
