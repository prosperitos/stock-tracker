
export class Stock
{
  symbol: string;
  currentPrice: number;
  highPrice: number;
  openingPrice: number;
  companyName: string;
  change: number
  constructor(symbol: string, currentPrice: number, highPrice: number, openingPrice: number,
    companyName: string, change: number){
    this.symbol = symbol;
    this.currentPrice = currentPrice;
    this.highPrice = highPrice;
    this.openingPrice = openingPrice;
    this.companyName = companyName;
    this.change = change;
  }
}
