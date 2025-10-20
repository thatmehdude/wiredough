export type CryptoAsset = {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  price: number;
  change24h: number;
  balance?: number;
  portfolioValue?: number;
};