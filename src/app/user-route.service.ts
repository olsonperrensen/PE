import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRouteService {

  private route = '';

  getRoute()
  {
    return this.route;
  }

  setRoute(url:string)
  {
    this.route = url;
    console.log(this.route);
  }

  constructor() { }
}
