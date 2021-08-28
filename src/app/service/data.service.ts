import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from '../ticker-table/ticker-table.component';
import { Trade } from '../trade-history/trade-history.component';


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

  getTradeData(){
    return this.http.get<Trade[]>(`http://localhost:8080/getTradeHistory`);
       
  }

  


}
