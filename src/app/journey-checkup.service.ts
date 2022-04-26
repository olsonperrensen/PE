import { Injectable } from '@angular/core';
import { Journey } from './journey';
import { JourneyDetailsService } from './journey-details.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyCheckupService {

  constructor(private journeyDetails:JourneyDetailsService) { }

    private isHealthy:boolean=true;
    private userJourney:Journey = this.journeyDetails.getUserJourney();
    
    public doCheckup():boolean
    {
      if(this.userJourney.date.length === 0 ||this.userJourney.from.length === 0||
        this.userJourney.to.length === 0  )
      {
        this.isHealthy = true; // TEMPORARY FIX 
      }
      return this.isHealthy;
    }
}
