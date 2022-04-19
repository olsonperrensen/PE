import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted:boolean=false;
  unmatch:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    if(form.value.password === form.value.cpassword)
    {
      this.unmatch = false;
      form.reset();
      this.submitted = true;
    }
    else
    {
      this.unmatch = true;
    }
  }

}
