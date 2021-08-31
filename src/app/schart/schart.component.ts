import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartService } from '../chart/chart.service';
import { DataService } from '../service/data.service';
import { chartData } from './datasource';

@Component({
  selector: 'app-schart',
  templateUrl: './schart.component.html',
  styleUrls: ['./schart.component.scss']
})
export class SchartComponent implements OnInit, OnChanges {


  @Input() ticker: string;
  public stockchartData: Object[];

  constructor(public chartService: ChartService, public dataService: DataService) { }

  ngOnInit(): void {
    
    this.stockchartData = chartData;
  }

  ngOnChanges() {
    console.log(this.ticker + "------")
    this.press(this.ticker);
  }

  press(nb) {
    // console.log(chartData[0].date)
    this.chartService.getDataWithoutPromise(nb)
    .subscribe(data => {
      this.stockchartData = data.prices.map(x => {
        return {...x, date: new Date(x.date*1000)}; 
      })
    })
    // this.dataService.getChartData().then(res => {console.log(res); this.stockchartData=res})
  }
}
