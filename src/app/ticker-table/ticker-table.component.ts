import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DataService } from '../service/data.service';
export class Ticker {
  constructor(
    public ticker: string,
    public lastClose: number,
    public upperBand: number
  ) {

  }
}
@Component({
  selector: 'app-ticker-table',
  templateUrl: './ticker-table.component.html',
  styleUrls: ['./ticker-table.component.scss']
})
export class TickerTableComponent implements OnInit {
  tickers: Ticker[] =[];
  datasample:Ticker[]=[];
  ticker_name: string = "AAPL";
  cols = [
    { field: "ticker", header: "Ticker Symbol" },
    { field: "lastClose", header: "Closing price" },
    { field: "upperBand", header: "High" }
  ];
  @Output() valueChange = new EventEmitter();

  constructor(private dataService: DataService) { }

  display(val) {
    if(isNaN(val)) return val;
    return val.toFixed(2);
  }


  ngOnInit(): void {
    // this.dataService.getTickerData()
    // .then(data => {this.tickers=data; console.log(data);})
    // this.dataService.getTickerData()
    // .then(data => this.tickers = data.map(({ tickersymbol }, index) => {this.dataService.getLiveData(tickersymbol).subscribe(data => this.tickers[index]=data) }))
    this.dataService.getTickerData()
    .subscribe(
      data => {
        data.map(
          ticker => {
            this.dataService.getLiveData(ticker.tickersymbol)
            .subscribe(
              tt => {
                this.datasample.push(tt);
              });
          }); 
      });
      console.log(this.datasample.length);
      this.tickers=this.datasample;
      console.log("Ticker length:" +this.tickers.length);

    
  }
  loading=false;
  
  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        this.tickers=this.tickers;
    }, 100);
}

  FilterUtils: any['custom'] = (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return parseInt(filter) > value;
  }
  fun(nb: any) {
    console.log(nb.ticker);
    this.ticker_name= nb.ticker;
    this.valueChange.emit(this.ticker_name);

  }
}
