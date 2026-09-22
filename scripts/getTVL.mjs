// scripts/getTVL.mjs
//
// Run every 6h by .github/workflows/cron-tvl.yml.
// No DEX pair exists yet for AAPLx/TSLAx, so there's nothing to read pool
// reserves from. Instead this reads totalSupply() on each stock token and
// multiplies by price — the market value of everything minted, not
// liquidity depth. Swap back to pool balanceOf reads once a real pair
// exists (see the commented block at the bottom for that version).
//
// Run locally with:  RPC_URL=https://rpc.mainnet.chain.robinhood.com node scripts/getTVL.mjs

import { createPublicClient, http, formatUnits, erc20Abi } from "viem";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, "..", "data", "tvl-data.json");
const MAX_SNAPSHOTS = 400; // ~100 days of history at 6h intervals — keeps the file small

const RPC_URL = process.env.RPC_URL || "https://rpc.mainnet.chain.robinhood.com";
const ROBINHOOD_CHAIN = {
  id: 4663,
  name: "Robinhood Chain",
  network: "robinhood",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] }, public: { http: [RPC_URL] } },
};

const client = createPublicClient({
  chain: ROBINHOOD_CHAIN,
  transport: http(RPC_URL),
});

// Mirrors lib/contracts.ts STOCK_TOKENS. Duplicated here (rather than
// imported) so this plain Node script has zero build step.
// REPLACE the two addresses below with your real AAPLx / TSLAx addresses.
const STOCK_TOKENS = [
  {
    id: "aaplx",
    label: "Tokenized Apple",
    symbol: "AAPLx",
    address: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9",
    decimals: 18,
    priceRef: "apple-inc",
  },
  {
    id: "tslax",
    label: "Tokenized Tesla",
    symbol: "TSLAx",
    address: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d",
    decimals: 18,
    priceRef: "tesla-inc",
  },
  {
    id: "nvdax",
    label: "Tokenized Nvidia",
    symbol: "NVDAx",
    address: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC",
    decimals: 18,
    priceRef: "nvidia-corp",
  },
  {
    id: "msftx",
    label: "Tokenized Microsoft",
    symbol: "MSFTx",
    address: "0x5621737f42dae558b81269fcb9e9e70c19aa6b35",
    decimals: 18,
    priceRef: "microsoft-corp",
  },
  {
    id: "amznx",
    label: "Tokenized Amazon",
    symbol: "AMZNx",
    address: "0x12f190a9F9d7D37a250758b26824B97CE941bF54",
    decimals: 18,
    priceRef: "amazon-com",
  },
];

async function getTotalSupply(tokenAddress, decimals) {
  try {
    const supply = await client.readContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: "totalSupply",
    });
    return Number(formatUnits(supply, decimals));
  } catch (err) {
    console.error(`  ! totalSupply failed for ${tokenAddress}:`, err.shortMessage || err.message);
    return 0;
  }
}

// Placeholder pricing — swap for a real GeckoTerminal / CoinGecko call.
// Left as a stub with fixed fallback prices so the pipeline runs end-to-end
// even before you've wired a real price API key.
async function getPrice(priceRef) {
  const FALLBACK_PRICES = {
    "apple-inc": 230,
    "tesla-inc": 250,
    "nvidia-corp": 130,
    "microsoft-corp": 430,
    "amazon-com": 185,
  };
  // TODO: replace with a real fetch, e.g.:
  // const res = await fetch(`https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/${addr}`);
  return FALLBACK_PRICES[priceRef] ?? 0;
}

async function calculateTokenValue(token) {
  const [supply, price] = await Promise.all([
    getTotalSupply(token.address, token.decimals),
    getPrice(token.priceRef),
  ]);
  const valueUsd = supply * price;
  return {
    id: token.id,
    label: token.label,
    symbol: token.symbol,
    totalSupply: supply,
    price,
    valueUsd,
  };
}

async function main() {
  console.log(`[getTVL] fetching snapshot for ${STOCK_TOKENS.length} tokens via ${RPC_URL}`);

  const tokenResults = await Promise.all(STOCK_TOKENS.map(calculateTokenValue));
  const totalTvlUsd = tokenResults.reduce((sum, t) => sum + t.valueUsd, 0);

  const snapshot = {
    timestamp: new Date().toISOString(),
    totalTvlUsd,
    tokens: tokenResults,
  };

  let existing = { snapshots: [] };
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    // first run — no file yet
  }

  existing.snapshots = existing.snapshots || [];
  existing.snapshots.push(snapshot);
  if (existing.snapshots.length > MAX_SNAPSHOTS) {
    existing.snapshots = existing.snapshots.slice(-MAX_SNAPSHOTS);
  }
  existing.latest = snapshot;
  existing.updatedAt = snapshot.timestamp;

  await writeFile(DATA_PATH, JSON.stringify(existing, null, 2));
  console.log(`[getTVL] wrote snapshot — total value: $${totalTvlUsd.toFixed(2)}`);
}

main().catch((err) => {
  console.error("[getTVL] fatal error:", err);
  process.exit(1);
});

// ---------------------------------------------------------------------------
// POOL-BASED VERSION (use this instead, once a real AAPLx/TSLAx pair exists)
// ---------------------------------------------------------------------------
// async function calculatePoolTVL(pool) {
//   const [bal0, bal1, price0, price1] = await Promise.all([
//     getBalance(pool.token0, pool.address, pool.token0Decimals),
//     getBalance(pool.token1, pool.address, pool.token1Decimals),
//     getPrice(pool.token0PriceRef),
//     getPrice(pool.token1PriceRef),
//   ]);
//   return { id: pool.id, label: pool.label, tvlUsd: bal0 * price0 + bal1 * price1 };
// }
