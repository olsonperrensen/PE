import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import * as a from 'angular-animations';

@Component({
  selector: 'app-fake-users-log',
  templateUrl: './fake-users-log.component.html',
  styleUrls: ['./fake-users-log.component.css'],
  animations: [
    a.bounceInLeftOnEnterAnimation(),
    a.bounceOutRightAnimation()
  ]
})
export class FakeUsersLogComponent implements OnInit {

  users:User[] = [];
  username = '';
  nat = '';
  results!:any;
  station1 = 'A';
  station2 = 'B';

  hasLeft:boolean=false;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {  
    setTimeout(() => {
      this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    }, 2000);
  setInterval(() => {
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      console.log();
      this.results = res;
      
      this.username = this.results.results[0].login.username;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png'
        });
    });
    this.hasLeft = !this.hasLeft;
    this.users = [];
  }, 9000);
  
  }

}
