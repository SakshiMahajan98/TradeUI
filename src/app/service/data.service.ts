import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from '../ticker-table/ticker-table.component';


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

  gettabledata(){
    return this.http.get<any>("http://localhost:8080/");
  }

  saveCompany(ind:string,value:number)
  {
    return this.http.get<number>(`http://localhost:8080/save/${ind}/${value}`);
  }

  getsaveddata(){
    return this.http.get<any>("http://localhost:8080/setCart");
  }

  senddata(cp:string)
  {
    
    return this.http.get<number>(`http://localhost:8080/save/${cp}/${this.num}`);
  }

  


}
