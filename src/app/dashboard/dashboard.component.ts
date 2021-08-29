import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import { Router } from '@angular/router';

export class User{
  constructor(
    public user_id:number,
    public user_name:string,
    public pan:string,
    public email:string,
    public phone:number,
    public cash:number,
    public equity_value:number
  ){

  }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:User;
  constructor(public dataservice:DataService, public router:Router) { }

  ngOnInit(): void {
    this.dataservice.getuserData().subscribe (
      data=> {this.data = data;}
    );
  }

}
