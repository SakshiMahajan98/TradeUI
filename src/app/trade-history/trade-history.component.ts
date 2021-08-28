import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

export class Trade{
  constructor(
    public trade_id: number,
    public Trade_time: string,
    public ticker_symbol:string,
    public order_side:string,
    public order_type:string,
    public quantity:number,
    public price: number,
    public status_code :number
  ){
   
  }
}
@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss']
})
export class TradeHistoryComponent implements OnInit {
  trades:Trade[]
  cols = [
    { field: "trade_id", header: "trade_id" },
    { field: "Trade_time", header: "Trade_time" },
    { field: "ticker_symbol", header: "ticker_symbol" },
    { field: "order_side", header: "order_side" },
    { field: "order_type", header: "order_type" },
    { field: "quantity", header: "quantity" },
    { field: "price", header: "price" },
    {field:"status_code",header:"statusCode"}

  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService. getTradeData().subscribe(data => this.trades = data);
  }


}
