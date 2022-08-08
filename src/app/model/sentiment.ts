
export class Sentiment {
  constructor(public month:string, public year : number, public change: number,
    public mspr: number){
    this.month = month;
    this.year = year;
    this.change = change;
    this.mspr = mspr;
  }
}
