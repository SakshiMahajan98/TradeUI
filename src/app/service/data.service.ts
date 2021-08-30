import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from '../ticker-table/ticker-table.component';
import { Trade } from '../trade-history/trade-history.component';
import { User } from '../dashboard/dashboard.component';

import { ChartData } from '../chart/chart.component';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  num:number=0;
  constructor( public http:HttpClient) { }
  getTickerData(){
    return this.http.get<any>('assets/TickerData.json')
        .toPromise()
        .then(res => <Ticker[]>res.data)
        .then(data => { return data; });
  }

  getTickerNames(){
    return this.http.get<any>('assets/TickerNames.json')
        .toPromise()
        .then(res => <string[]>res.data)
        .then(data => { return data; });
  }

  getTradeData(){
    console.log(environment.portfolioUrl);
    return this.http.get<any>(`http://trade-service-hackathon.punedevopsa4.conygre.com/api/trade/get`);
    
       
  }
  getPDData(){
    const id:number=1;
    console.log(environment.tradeUrl);
    return this.http.get<any>(`http://portfolio-service-hackathon.punedevopsa4.conygre.com/api/portfolio/get/1`);
    
       
  }
  getuserData(){
    return this.http.get<User>(`http://localhost:8080/api/shippers/h`);
       
  }
 
  buyTrade(arr:any[],ft:number)
  {
    //ft=0 buy
    //ft=1 sell
    return this.http.get<any>(`http://trade-service-hackathon.punedevopsa4.conygre.com/${ft}/${arr}`);
  }

  editMoney(withdraw:number,ft:number)
  {
    return this.http.get<any>(`http://localhost:8080/${ft}/${withdraw}`);
  }
  getChartData()
  {
    return this.http.get<any>('assets/ChartData.json')
    .toPromise()
    .then(res => <ChartData[]>res.data)
    .then(data => { return data; });
  }


}
