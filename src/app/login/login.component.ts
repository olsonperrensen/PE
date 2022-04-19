import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
    console.log(f.value);
    this.isLoggedIn=true;
  }
}
