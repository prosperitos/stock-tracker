import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  token='bu4f8kn48v6uehqi3cqg';
  baseUrl = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) { }

  /** this service permit to retrieve symbol quote */
  getSymboleQuote(symbol: string):Observable<any>{
    let endpoint ='/quote';
    let params =this.getHttpParams({symbol:symbol,
      token: this.token});
    return this.http.get(`${this.baseUrl}${endpoint}`, {params}).pipe(
      catchError((err)=>{
        console.error(err);
        return this.handleError(err);
      }));
  }

  /** this service permit to get company of symbol */
  getSymbolCompany(symbol: string):Observable<any>{
    let endpoint ='/search';
    let params =this.getHttpParams({q:symbol,
      token: this.token});
    return this.http.get(`${this.baseUrl}${endpoint}`, {params}).pipe(
      catchError((err)=>{
        console.error(err);
        return this.handleError(err);
      }));
  }

  /** this service permit to get sentiment of symbol */
  getSentimentOfSymbol(symbol: string | null , from: string, to: string):Observable<any>{
    let endpoint = '/stock/insider-sentiment';
    let params =this.getHttpParams({symbol:symbol,
      token: this.token, from: from, to: to});
    return this.http.get(`${this.baseUrl}${endpoint}`, {params}).pipe(
      catchError((err)=>{
        console.error(err);
        return this.handleError(err);
      }));
  }

  getHttpParams(obj: any): HttpParams{
    let params = new HttpParams();
    Object.keys(obj).forEach((key) => {
      params = params.append(key,obj[key]);
    });
    return params;
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    // just a test ... more could would go here
    return throwError(() => err);
  }

}
