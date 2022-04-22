import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { JourneyCheckupService } from './journey-checkup.service';

@Injectable({
  providedIn: 'root'
})
export class TableGuardServiceGuard implements CanActivate {

  constructor(private journeyCheckup:JourneyCheckupService, private router:Router){}

  canActivate(){
    if(this.journeyCheckup.doCheckup() == true){
      return true;
    } else {
      this.router.navigate(['/error-permission']);
      return false;
    }
  }
  
}
