import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeStatusService {

  private status:boolean = false

  public getStatus()
  {
    return this.status
  }

  public setStatus(u_status:boolean)
  {
    this.status = u_status;
  }

  constructor() { }
}
