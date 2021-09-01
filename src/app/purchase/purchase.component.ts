import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLabelSettings } from '@syncfusion/ej2-angular-charts';
import { User } from '../dashboard/dashboard.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  data: User;

  constructor(public dataservice: DataService, public router: Router) { }

  ngOnInit(): void {
    setInterval(()=>
      { 
        console.log("update received")
        this.dataservice.getuserData().subscribe (
          data=> {
            this.data = data;
         
          }
    );
  }, 2000);
    
  }

}
