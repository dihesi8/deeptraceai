import { ImageResponse } from "next/og";
import { OgScene } from "@/lib/og-scene";

export const alt = "DEEPTRACE AI — Cross-Chain Liquidity Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgScene />, { ...size });
}
