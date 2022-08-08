import { Component, OnInit } from '@angular/core';
import { TypeSymbol } from 'src/app/enum/type.symbol';
import { Stock } from '../../../model/stock';
import { StockService } from '../../../services/stock.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  symbol: string = '';
  stockList: Stock[] = [];
  loading = false;

  constructor(private stockService: StockService) {

    /**get data with localStorage */
    const data = localStorage.getItem('stockList');
    if (data) {
      this.stockList = JSON.parse(data);
    }
  }

  ngOnInit(): void {

  }

  removeStock(i: number) {
    this.stockList.splice(i, 1);
    /**update localStorage */
    localStorage.setItem('stockList', JSON.stringify(this.stockList));
  }

  getSymbol() {
    this.loading = true;
    if (this.checkIsValidSymbol(this.symbol)) {
      this.stockService.getSymboleQuote(this.symbol).subscribe(value => {
        this.stockService.getSymbolCompany(this.symbol).subscribe(company => {
          if (company.result) {
            this.stockList.push(new Stock(this.symbol, value.c, value.h, value.o, company.result[0].description, value.dp));
            /**update localStorage */
            localStorage.setItem('stockList', JSON.stringify(this.stockList));
            this.loading = false;
            this.symbol ='';
          }
        });
      });
    } else {
      this.loading = false;
      alert('symbol valid are: AAPL, GOOGL, TSLA. try again please!');
    }
  }

  /**check if symbol enter is valid */
  checkIsValidSymbol(symbol: string): boolean {
    if (symbol === TypeSymbol.AAPL) {
      return true;
    } else if (symbol === TypeSymbol.GOOGL) {
      return true;
    } else if (symbol === TypeSymbol.TSLA) {
      return true;
    } else {
      return false;
    }
  }

}
