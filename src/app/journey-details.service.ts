import { EventEmitter, Injectable } from '@angular/core';
import { Journey } from './journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyDetailsService {

  userJourney:Journey = new Journey();

  // Still has to be implemented in case the values change. Then other components can react.
  isFilled = new EventEmitter<boolean>();

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
