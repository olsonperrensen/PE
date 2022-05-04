import *  as a from 'angular-animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Journey } from './journey';
import { JourneyDetailsService } from './journey-details.service';
import {HttpClient} from '@angular/common/http';
import { DarkModeStatusService } from './dark-mode-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    a.hingeAnimation(),
    a.fadeOutAnimation()
  ]
})
export class AppComponent implements OnInit{

  userJourney!:Journey;

  constructor(private journeyDetails:JourneyDetailsService,
    private httpClient:HttpClient,private darkModeStatus:DarkModeStatusService){}

  isFirstTime:boolean = true;
  isAnim:boolean = false;
  switch_status:boolean = false;
  // BUG: Best to use observables to subscribe for changes
  ngOnInit(): void {
    this.onHideCookies();
      this.userJourney = this.journeyDetails.getUserJourney();
      console.log(`From app.component:${this.userJourney.from}-${this.userJourney.to}-${this.userJourney.date}`.toUpperCase());
      this.switch_status = this.darkModeStatus.getStatus();
    }

    switchStatusFn()
    {
      if(localStorage.getItem('dark-mode') === `{"darkMode":false}`)
      {
        return 'black'
      }
      else
      {
        return 'white'
      }

    }
  onHideCookies()
  {
    setTimeout(() => {
      this.isAnim = true;
    }, 300);
    setTimeout(() => {
      this.isFirstTime = false;
    }, 700);
  }
}
