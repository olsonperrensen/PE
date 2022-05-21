import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-credit-card-checker',
  templateUrl: './credit-card-checker.component.html',
  styleUrls: ['./credit-card-checker.component.css']
})
export class CreditCardCheckerComponent implements OnInit {
  today = new Date();
  minExpDate:any;
  // creditCardType = require("credit-card-type");

  constructor() { }

  ngOnInit(): void {
    this.minExpDate = new Date(`2022-${this.today.getMonth()+2}-${this.today.getDay()}`).toISOString().split('T')[0];
  }

  onNgModelChange(card:NgModel)
  {
    if(card.value.length > 5 && card.value.length < 16)
    {
      // TO-DO
    }
    else
    {
     console.log('invalid card') 
    }
  }  

}
