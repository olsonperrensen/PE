import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import * as a from 'angular-animations';
import { FakeTrainsService } from './fake-trains.service';
import { Cities } from './cities';

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
  tmp_cities!:Cities;

  hasLeft:boolean=false;


  constructor(private http:HttpClient, private fakeTrains:FakeTrainsService) { }

  ngOnInit(): void {  
  setInterval(() => {
    this.hasLeft = false;
    this.http.get
    ('https://randomuser.me/api/').subscribe(res => 
    {
      this.results = res;
      this.username = this.results.results[0].name.first;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.tmp_cities = this.fakeTrains.getCities(this.tmp_cities);
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png',
          cities:this.tmp_cities
        });
    }
    );
    setTimeout(() => {
      this.hasLeft = true;
    }, 6000);
    this.users = [];
    this.http.get
    ('https://randomuser.me/api/').subscribe(res => 
    {
      this.results = res;
      this.username = this.results.results[0].name.first;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.tmp_cities = this.fakeTrains.getCities(this.tmp_cities);
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png',
          cities:this.tmp_cities
        });
    }
    );
    this.users = [];
    this.http.get
    ('https://randomuser.me/api/').subscribe(res => 
    {
      this.results = res;
      this.username = this.results.results[0].name.first;
      this.nat = this.results.results[0].nat.toLowerCase();
      this.tmp_cities = this.fakeTrains.getCities(this.tmp_cities);
      this.users.push(
        {
          username:this.username,
          src:'https://flagcdn.com/16x12/'+ this.nat + '.png',
          cities:this.tmp_cities
        });
    }
    );
    this.users = [];
  }, 6600);
  
  }

}
