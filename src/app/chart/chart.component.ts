import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import {MessageService} from 'primeng/api';
import { UIChart} from 'primeng/chart';
import { ChartService } from './chart.service';
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
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: UIChart; 
   cD:ChartData[];
  constructor(public dataservice:DataService,private messageService: MessageService, public chartService: ChartService) { }
  
  cols = [
    { field: "date", header: "Date" },
    { field: "open", header: "open" },
    { field: "high", header: "high" },
    { field: "low", header: "low" },
    { field: "close", header: "close" },
    { field: "volume", header: "volume" },
  
  ];

  ngOnInit(): void {
    // this.dataservice.getChartData().then(data => {this.cD = data;
    //                                                console.log("Inside");
    //                                                console.log(data);
    //                                                console.log("Inside");
    //                                                this.getgraph();
    //                                               this.chart.refresh();});
  this.chartService.getData("TCS")
    .then(data => {this.cD=data;
    this.getgraph();
    this.chart.refresh();});
    
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
     console.log(this.closingprice);

   }
  console.log("FOR LOOP BAHAR");
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
console.log(this.data2);

}

selectData(event) {
  this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data2.datasets[event.element._datasetIndex].data[event.element._index]});
}

 
}
