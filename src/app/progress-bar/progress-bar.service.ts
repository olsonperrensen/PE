import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private step = '';

  constructor() { }

  setProgressBar(step:string)
  {
    this.step = step;
  }
  getProgressBar()
  {
    return this.step;
  }
}
