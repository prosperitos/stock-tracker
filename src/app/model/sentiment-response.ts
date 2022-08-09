
export interface SentimentResponse {
  data: Array<SentimentObject>;
}

export interface SentimentObject {
  symbol: string;
  year: number;
  month: number;
  change: number;
  mspr: number;
}
