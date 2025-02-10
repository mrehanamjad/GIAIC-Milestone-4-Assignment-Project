export interface CryptoData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string; // ISO date string
    atl: number;
    atl_change_percentage: number;
    atl_date: string; // ISO date string
    roi: null; // This field is always null in the given data
    last_updated: string; // ISO date string
  }
  
  export interface Exchange {
    id: string;
    name: string;
    year_established: number;
    country: string;
    description: string;
    url: string;
    image: string;
    has_trading_incentive: boolean;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
  }