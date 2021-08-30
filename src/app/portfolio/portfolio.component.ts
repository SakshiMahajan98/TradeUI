import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

export class PortfolioData{
  constructor(
    public ticker_symbol:string,
    public quantity:number,
    public avg_price:number
  ){
   
  }
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pd:[];
  cols = [
    { field: "ticker_symbol", header: "Ticker Symbol" },
    { field: "quantity", header: "Quantity" },
    { field: "avg_price", header: "Average Price" }  

  ];
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService. getPDData().subscribe(data => this.pd = data);
    console.log(this.pd);
  }

}
