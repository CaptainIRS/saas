export interface CoinMetrics {
  price: number;
  marketCap: number;
  volume24h: number;
  priceChange24h: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  timestamp: Date;
}

export interface ChartData {
  timestamp: string;
  value: number;
}