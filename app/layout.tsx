import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GlobalBackground from "@/components/GlobalBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Replace with your real production domain once deployed — used to resolve
// absolute URLs for Open Graph / Twitter images and canonical links.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deeptrace.ai";

const title = "DEEPTRACE AI — Cross-Chain Liquidity Intelligence";
const description =
  "DEEPTRACE AI is a cross-chain liquidity intelligence layer that traces stablecoin rotations, bridge flows, and sector momentum across blockchain ecosystems before broader market awareness — powered by six specialized AI agents and the $DEEPT token on Robinhood Chain.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · DEEPTRACE AI",
  },
  description,
  applicationName: "DEEPTRACE AI",
  keywords: [
    "DEEPTRACE AI",
    "cross-chain liquidity intelligence",
    "$DEEPT token",
    "Robinhood Chain",
    "on-chain analytics",
    "crypto liquidity tracking",
    "AI agents crypto",
    "stablecoin flow tracking",
    "DeFi intelligence",
  ],
  authors: [{ name: "DEEPTRACE AI" }],
  creator: "DEEPTRACE AI",
  publisher: "DEEPTRACE AI",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "DEEPTRACE AI",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030305",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans leading-relaxed antialiased">
        <GlobalBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
