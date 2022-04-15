import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    console.log(form.value)
    form.reset();
    this.submitted = true;
  }

}
