import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../dashboard/dashboard.component';
import { DataService } from '../service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username;
  c:number;
  myControl = new FormControl();
  edit=0;
  total;
  result=100;
  user:User;
  worry=0;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  Withdraw:number;
  buyerForm = new FormGroup({
    Withdraw: new FormControl('', [
      Validators.required,
    ]),
    Deposit:new FormControl('',[Validators.required,])
  });
  
  constructor(public dataService:DataService, public router:Router) { }

  ngOnInit(): void {
    this.edit=0;
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME,"Sakshi");
    this.username=sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.dataService.getuserData().subscribe (
      data=> {this.user = data;
              this.total=this.user.cash+this.user.equity_value; 
              this.c=this.user.cash;       
      }
    );
    
  }
 

  AddMoney()
  {
    this.edit=1;
  }
  RemoveMoney()
  {
    this.edit=2;
    console.log(this.edit);
  }
  RemMoneyValidate(){
    console.log(this.buyerForm.get('Withdraw'));
     if(this.buyerForm.get('Withdraw').value > this.user.cash)
     {
      this.worry=1;
      console.log(this.worry);
     }
     else
     {
       this.dataService.editMoney(this.buyerForm.get('Withdraw').value,0).toPromise().then(data => this.result = data);
       this.worry=0;
       console.log(this.worry);
       this.edit=0;
     }
  }
  AddMoneyValidate()
  {
    console.log(this.buyerForm.get('Deposit'));
       this.dataService.editMoney(this.buyerForm.get('Withdraw').value,0).toPromise().then(data => this.result = data);
       this.worry=0;
       this.user.cash=this.user.cash+ (Number) (this.buyerForm.get('Deposit').value);
       console.log(this.worry +"hello" +this.user.cash);
       this.edit=0;
     }
  }


