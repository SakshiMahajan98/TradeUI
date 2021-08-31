import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges} from '@angular/core';
import { DataService } from '../service/data.service';
import {MessageService} from 'primeng/api';
import { UIChart} from 'primeng/chart';
import { ChartService } from './chart.service';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
export class ChartData{
  constructor(
    public date:string,
    public open:number,
    public high:number,
    public low:number,
    public close:number,
    public volume:number
    
  ){

  }
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [MessageService]
})
export class ChartComponent implements OnInit,OnChanges {
  @ViewChild('chart') chart: UIChart; 
   cD:ChartData[];
   @Input() ticker: string;

   
  constructor(public dataservice:DataService,private messageService: MessageService, public chartService: ChartService,public router:Router) { }
  
  cols = [
    { field: "date", header: "Date" },
    { field: "open", header: "open" },
    { field: "high", header: "high" },
    { field: "low", header: "low" },
    { field: "close", header: "close" },
    { field: "volume", header: "volume" },
  
  ];

  ngOnInit(): void {
                                               
   
      this.chartService.getData(this.ticker)
      .then(data => {this.cD=data;
      this.getgraph();
      this.chart.refresh();});
   
    
  } 
  ngOnChanges(changes: SimpleChanges) {
    if(changes.ticker)
    {
      console.log("Hello");
      setTimeout(() => {
        this.chart.reinit();
      }, 100);
    }
      setTimeout(() => {
        this.chart.reinit();
      }, 100);
   
  } 


  data2:any;
lab:string[]=[];
closingprice:number[]=[];
nsedata:number[]=[];
bsedata:number[]=[];
options:any;
value=100;
getgraph()
{
  console.log(this.cD[0].date);
   for(var i=0;i<this.cD.length;i++)
   {
     this.lab.push(this.cD[i].date);
     
     this.closingprice.push(this.cD[i].close);
     

   }
 
  this.data2 = {

    labels: this.lab,
  
    datasets: [
        {
            label: 'ClosingPrice',
            data: this.closingprice,
            fill: true,
             borderColor: '#2E79C4'
        },
     
    ]

   
}
this.options = {
  title: {
      display: true,
      text: 'DateWise Closing Price',
      fontSize: 16
  },
  legend: {
      position: 'top'
  },
  responsive: false,
  maintainAspectRatio: false
};
this.chart.refresh();

}

selectData(event) {
  this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data2.datasets[event.element._datasetIndex].data[event.element._index]});
}

 
}
