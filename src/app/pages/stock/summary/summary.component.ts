import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { formatDate } from '@angular/common';
import { Sentiment } from 'src/app/model/sentiment';
import { Month } from 'src/app/enum/month.enum';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  sentimentList: Sentiment[] = [];
  symbol: string | null;
  companyName = null;
  loading = true;
  lastThreeMonth: string[] = [];
  constructor(private route: ActivatedRoute,
    private stockService: StockService) {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
  }

  ngOnInit(): void {
    if (this.symbol) {
      const from = this.getStartDate();
      const to = this.getEndDate(from);

      this.stockService.getSymbolCompany(this.symbol).subscribe(company => {
        this.stockService.getSentimentOfSymbol(this.symbol, from, to).subscribe((value) => {
          if (value) {
            this.companyName = company.result[0].description;
            value.data.forEach((element: any) => {
              this.sentimentList.push(new Sentiment(Month[element.month],
                element.year, element.change, element.mspr));
            });
            this.lastThreeMonth = this.findMonths(from);
            this.loading = false;
          }
        });
      });
    }
  }

  getStartDate(): string {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 3);
    return formatDate(currentDate, 'yyyy-MM-dd', 'en');
  }

  getEndDate(date: string): string {
    const currentDate = new Date(date);
    currentDate.setMonth(currentDate.getMonth() + 2);
    return formatDate(currentDate, 'yyyy-MM-dd', 'en');
  }

  /** this function permit to save three last month in the list */
  findMonths(date: string): string[] {
    let tabMonth: string[] = [];
    let indice: number = new Date(date).getMonth();
    console.log(indice);
    tabMonth.push(Month[indice + 1]);
    tabMonth.push(Month[indice + 2]);
    tabMonth.push(Month[indice + 3]);
    return tabMonth;
  }

}
