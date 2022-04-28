import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-credit-card-checker',
  templateUrl: './credit-card-checker.component.html',
  styleUrls: ['./credit-card-checker.component.css']
})
export class CreditCardCheckerComponent implements OnInit {

  // creditCardType = require("credit-card-type");

  constructor() { }

  ngOnInit(): void {
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
