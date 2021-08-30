import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

export class Trade{
  constructor(
    public trade_id: number,
    public trade_time: string,
    public ticker_symbol:string,
    public order_side:string,
    public order_type:string,
    public quantity:number,
    public price: number,
    public status_code :string
  ){
   
  }
}
@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss']
})
export class TradeHistoryComponent implements OnInit {
  trades:Trade[]=[];
  dates:string[];
  cols = [
    { field: "trade_id", header: "Trade ID" },
    { field: "trade_time", header: "Trade time Stamp" },
    { field: "ticker_symbol", header: "Ticker symbol" },
    { field: "order_side", header: "Buy/Sell" },
    { field: "order_type", header: "Order Type (Market/Limit)" },
    { field: "quantity", header: "Quantity" },
    { field: "price", header: "Price" },
    {field:"status_code",header:"Status Code"}

  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService. getTradeData().subscribe(data => 
      {this.trades = data;
        this.getDateValue();
        console.log(this.trades);
      }
    );
  }

  getDateValue(){
      for(var i=0;i<this.trades.length;i++)
      {
        var unixts = this.trades[i].trade_time;
        var date = new Date(unixts);
        
        var fdate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
        this.trades[i].trade_time=fdate;
        console.log(fdate);

        var t=this.trades[i].order_side;
        console.log(t);
        if(t=="0")
        {
          this.trades[i].order_side="Buy";
        }
        else{
          this.trades[i].order_side="Sell";
        }

        var x=this.trades[i].status_code;
        console.log(x);
        if(x=="0")
        {
          this.trades[i].status_code="Initialized";
        }
        else if(x=="1"){
          this.trades[i].status_code="Sent to Exchange";
        }
        else if(x=="2"){
          this.trades[i].status_code="Filled";
        }
        else
        {
          this.trades[i].status_code="Rejected";
        }
      }
  }
  


}
