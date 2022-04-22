import { Component, OnInit } from '@angular/core';
import { Journey } from './journey';
import { JourneyDetailsService } from './journey-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userJourney!:Journey;

  constructor(private journeyDetails:JourneyDetailsService){}

  // BUG: Best to use observables to subscribe for changes
  ngOnInit(): void {
      this.userJourney = this.journeyDetails.getUserJourney();
      console.log(`From app.component:${this.userJourney.from}-${this.userJourney.to}-${this.userJourney.date}`);
  }
}
