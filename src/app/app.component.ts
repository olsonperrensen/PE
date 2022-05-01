import *  as a from 'angular-animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Journey } from './journey';
import { JourneyDetailsService } from './journey-details.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    a.hingeAnimation()
  ]
})
export class AppComponent implements OnInit{

  userJourney!:Journey;

  constructor(private journeyDetails:JourneyDetailsService,
    private httpClient:HttpClient){}

  isFirstTime:boolean = true;
  isAnim:boolean = false;

  // BUG: Best to use observables to subscribe for changes
  ngOnInit(): void {
      this.userJourney = this.journeyDetails.getUserJourney();
      console.log(`From app.component:${this.userJourney.from}-${this.userJourney.to}-${this.userJourney.date}`.toUpperCase());
    
    }
  onHideCookies()
  {
    this.isAnim = true;
    setTimeout(() => {
      this.isFirstTime = false;
    }, 1700);
  }
}
