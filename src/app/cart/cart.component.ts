import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
export class savedData {
  constructor(
    public symbol: string,
    public nse: number,
    public bse:number,
    public difference:number,
    public noOfStocks:number,
    public Profit:number,
    public like:number,
    public date:string
  ){

  }
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data:any;
  list:savedData[]=[];
  count:number=0;
  constructor( public dataservice:DataService) { 
  }

  ngOnInit(): void {
    this.refreshlist();  
}
refreshlist()
{
  this.dataservice.getsaveddata().subscribe (
    data=> {this.data = data;
    this.list=this.data[1];
    this.count=this.data[0];
    }
  );
}


deletebyid(cp:string)
  {
     var temp:savedData[]=[];
     var k:number=0;
     this.data[1].forEach(function (value) {
      if(value.symbol!=cp)
      {
         console.log("Hello ji "+value.symbol);
           temp[k]=value;
           k++;
      }
  }); 
      this.data[1]=temp;
      console.log("Data saved");
      this.dataservice.senddata(cp).subscribe(
        response=>console.log("Data sent")
      );
      this.count=this.count-1;
      console.log(this.count);
  }
   




  }    

