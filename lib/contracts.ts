// ---------------------------------------------------------------------------
// CONTRACT REGISTRY — YOU MUST FILL THIS IN
// ---------------------------------------------------------------------------
// I have not verified real, current Robinhood Chain contract addresses.
// Do not ship with the placeholders below — the dashboard will show garbage
// or zero data until you replace them with addresses you've confirmed
// yourself (block explorer + a second independent source, since a wrong
// address will silently return a balance of 0 rather than erroring).
//
// Where to find them:
//  - Robinhood Chain block explorer: https://robinhoodchain.blockscout.com
//  - Robinhood's own developer docs for the chain
//  - Dune Analytics dashboards tagged "Robinhood Chain" / "Entropy Advisors"
//    (community-verified addresses are a good cross-check)
// ---------------------------------------------------------------------------

export type StockTokenConfig = {
  id: string;
  symbol: string; // e.g. AAPL
  label: string; // e.g. "Tokenized Apple"
  address: `0x${string}`;
  decimals: number;
  // GeckoTerminal / CoinGecko id used to price it, or a manual price feed key
  priceRef: string;
};

// No DEX pair exists yet for these tokens, so there is nothing to read pool
// reserves from. Instead we value each token as totalSupply() × price —
// i.e. the market value of everything minted, not liquidity in a pool.
// Once a real pair exists on a DEX, add a POOLS array back and read
// balanceOf(pairAddress) on each side the way the original version did.
export const STOCK_TOKENS: StockTokenConfig[] = [
  {
    id: "aaplx",
    symbol: "AAPLx",
    label: "Tokenized Apple",
    address: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9",
    decimals: 18,
    priceRef: "apple-inc",
  },
  {
    id: "tslax",
    symbol: "TSLAx",
    label: "Tokenized Tesla",
    address: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d",
    decimals: 18,
    priceRef: "tesla-inc",
  },
];

// Robinhood Chain network config (from public docs — verify chain ID/RPC
// before relying on this, chains occasionally get renumbered pre-mainnet-
// stabilization).
export const ROBINHOOD_CHAIN = {
  id: 4663,
  name: "Robinhood Chain",
  rpcUrl: "https://rpc.mainnet.chain.robinhood.com",
  explorer: "https://robinhoodchain.blockscout.com",
};
