import { Injectable } from '@angular/core';
import { Journey } from './journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyDetailsService {

  userJourney:Journey = new Journey();

  constructor() {}

  public getUserJourney():Journey
  {
    return this.userJourney
  }
  public setUserJourney(TSJourney:Journey)
  {
    this.userJourney = TSJourney;
  }

}
