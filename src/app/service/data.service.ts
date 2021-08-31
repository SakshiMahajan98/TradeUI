import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticker } from '../ticker-table/ticker-table.component';
import { Trade } from '../trade-history/trade-history.component';
import { User } from '../dashboard/dashboard.component';

import { ChartData } from '../chart/chart.component';

import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  num:number=0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  constructor( public http:HttpClient) { }
  getTickerData(){
    // return this.http.get<any>('assets/TickerData.json')
    //     .toPromise()
    //     .then(res => <Ticker[]>res.data)
    //     .then(data => { return data; });

    return this.http.get<any>('assets/sp500.json')
            // .toPromise();
    
  }

  getTickerNames(){
    return this.http.get<any>('assets/TickerNames.json')
        .toPromise()
        .then(res => <string[]>res.data)
        .then(data => { return data; });
  }

  getTradeData(){
    console.log(environment.portfolioUrl);
    return this.http.get<any>(`${environment.tradeUrl}/api/trade/get`);
    
       
  }
  getPDData(){
    const id:number=1;
    console.log(environment.tradeUrl);
    return this.http.get<any>(`${environment.portfolioUrl}/api/portfolio/get/1`);
    
       
  }
  getuserData(){
    //return this.http.get<User>(`http://user-service-hackathon.punedevopsa4.conygre.com/api/user/get/1`);
    return this.http.get<User>(`${environment.userUrl}/api/user/1`);
       
  }
 
  buyTrade(arr:any[],ft:number)
  {
    //ft=0 buy
    //ft=1 sell
    console.log(arr);
    var data={
      "order_side":ft,
      "order_type":arr[3],
      "price":arr[2],
      "quantity":arr[1],
      "ticker_symbol":arr[0],
      "user_id":1,

    };
    
    return this.http.post<number>(`${environment.tradeUrl}/api/trade/add`+ '', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editMoney(amount:number,ft:number)
  {
   if(ft==0)
   {
    return this.http.get<any>(`${environment.moneyUrl}/api/money/withdraw/1/${amount}`);

   }
   else
   {
       return this.http.get<any>(`${environment.moneyUrl}/api/money/add/1/${amount}`);
   }
    
  }
  getChartData()
  {
    return this.http.get<any>('assets/ChartData.json')
    .toPromise()
    .then(res => <ChartData[]>res.data)
    .then(data => { return data; });
  }
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
 getLiveData(ticker: string="AAPL") {
  const url = `https://qz4sxjl623.execute-api.us-east-1.amazonaws.com/default/tradeAdvisor?ticker=${ticker}`;
  return this.http.get<any>(url)
  // .toPromise()
 }
}
