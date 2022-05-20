import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeStatusService {

  private status= new Subject(); 

  public getStatus()
  {
    return this.status
  }

  public setStatus(u_status:boolean)
  {
    this.status.next(u_status);
  }

  constructor() { }
}
