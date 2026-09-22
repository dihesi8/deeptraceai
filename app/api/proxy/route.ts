// app/api/proxy/route.ts
//
// Optional: only needed if you want a "live" number on top of the static
// snapshot (e.g. a live price ticker). This runs server-side on Vercel, so
// your RPC URL / API keys never reach the browser and never eat into a
// per-visitor quota against your own key.
//
// GET /api/proxy?type=price&ref=apple-inc

import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (type === "price") {
    const ref = searchParams.get("ref");
    if (!ref) {
      return NextResponse.json({ error: "missing ref" }, { status: 400 });
    }
    try {
      // Swap in a real GeckoTerminal/CoinGecko call here. Left minimal so
      // this route works out of the box without a paid key.
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(
          ref
        )}&vs_currencies=usd`,
        { next: { revalidate: 60 } }
      );
      const data = await res.json();
      return NextResponse.json(data);
    } catch (err) {
      return NextResponse.json({ error: "upstream fetch failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ error: "unknown type" }, { status: 400 });
}
