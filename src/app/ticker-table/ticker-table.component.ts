import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../service/data.service';
export class Ticker{
  constructor(
    public tickersymbol: string,
    public cp: number,
    public pv:number
  ){

  }
}
@Component({
  selector: 'app-ticker-table',
  templateUrl: './ticker-table.component.html',
  styleUrls: ['./ticker-table.component.scss']
})
export class TickerTableComponent implements OnInit {
  tickers:Ticker[]
  cols = [
    { field: "tickersymbol", header: "Ticker Symbol" },
    { field: "closing", header: "Closing price" },
    { field: "high", header: "High" }
  ];
  @Output() valueChange = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTickerData().then(data => this.tickers = data);
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
  fun(nb:any)
  {
    console.log(nb.tickersymbol);
    this.valueChange.emit(nb.tickersymbol);
    
  }
}
