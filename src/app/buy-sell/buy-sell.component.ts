import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {
  myControl = new FormControl();
  options: string[]=[];
  ticker:string;
  error=0;
  
  flag=0;
  result=9;
  hello=0;
  filteredOptions: Observable<string[]>;
  buyerForm = new FormGroup({
    Tick: new FormControl('', [
      Validators.required,
    ]),
    Quantity: new FormControl('', [
      Validators.required
    ]),
    Price: new FormControl('', [
      Validators.required
    ])
  });
  
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.error=0;
  
    this.flag=0;
    this.result=9;
    this.hello=0;
    this.dataService.getTickerNames().then(data => this.options = data);
    console.log("Hello"+this.options);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    console.log(this.filteredOptions);
  }
 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  public BuyFormData()
  {
    if(this.error==0)
    {
      this.hello=99;
      
    }
    else if((!this.buyerForm.get('Quantity').value || this.buyerForm.get('Quantity').value==0) || (!this.buyerForm.get('Price').value || this.buyerForm.get('Price').value==0 ))
    {
      this.hello=99;
    }
    else{
      var arr: any[] = [this.ticker,this.buyerForm.get('Quantity').value,this.buyerForm.get('Price').value]  ; 
      this.hello=0;
      console.log(arr);
      this.dataService.buyTrade(arr,0).toPromise().then(data => this.result = data);
    }
    

  }
  public SellFormData()
  {
    if(this.error==0)
    {
      this.hello=99;
      
    }
    else if((!this.buyerForm.get('Quantity').value || this.buyerForm.get('Quantity').value==0) || (!this.buyerForm.get('Price').value || this.buyerForm.get('Price').value==0 ))
    {
      this.hello=99;
    }
    else{
      var arr: any[] = [this.ticker,this.buyerForm.get('Quantity').value,this.buyerForm.get('Price').value]  ; 
      this.hello=0;
      console.log(arr);
      this.dataService.buyTrade(arr,1).toPromise().then(data => this.result = data);
    }
    

  }
  OnHumanSelected(ticker) {
    console.log('### Trigger');
    console.log(ticker);
    console.log(this.ticker);
    console.log(this.options.includes(this.ticker))
   if(this.options.includes(this.ticker))
   {
     this.flag=2;
     console.log(this.flag);
      this.error=1;
      console.log(this.error);
   }
    
  }

}
