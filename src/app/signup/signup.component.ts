import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as a from 'angular-animations';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations:
  [
    a.jackInTheBoxOnEnterAnimation()
  ]
})
export class SignupComponent implements OnInit {

  submitted:boolean=false;
  isUnmatch:boolean=false;
  isTooShort:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    const secret = CryptoJS.AES.encrypt(JSON.stringify(form.value),'nghimax').toString();
    console.log(secret);

    if(form.value.username.length < 4 || form.value.email.length < 4 
      || form.value.password.length < 4
      || form.value.cpassword.length < 4)
    {
      this.isTooShort = true;
    }
    if(form.value.password === form.value.cpassword)
    {
      if(form.value.username.length < 4 || form.value.email.length < 4 
        || form.value.password.length < 4
        || form.value.cpassword.length < 4)
      {
        this.isTooShort = true;
      }
      else
      {
        this.isTooShort = false;
        this.isUnmatch = false;
        form.reset();
        this.submitted = true;
      }  
    }
    else
    {
      this.isUnmatch = true;
    }
  }

}
