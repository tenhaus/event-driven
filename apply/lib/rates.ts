export interface RateRange {
  high: number;
  low: number;
}

export interface Rates {
  fixed: RateRange;
  variable: RateRange;
}
