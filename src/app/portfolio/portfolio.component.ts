import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

export class PortfolioData{
  constructor(
    public ticker_symbol:string,
    public quantity:number,
    public Avg_price:number
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
    { field: "ticker_symbol", header: "ticker_symbol" },
    { field: "quantity", header: "quantity" },
    { field: "Avg_price", header: "Avg_price" }  

  ];
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService. getPDData().subscribe(data => this.pd = data);
    console.log(this.pd);
  }

}
