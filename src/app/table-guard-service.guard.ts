import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JourneyCheckupService } from './journey-checkup.service';

@Injectable({
  providedIn: 'root'
})
export class TableGuardServiceGuard implements CanActivate {

  constructor(private journeyCheckup:JourneyCheckupService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    return this.journeyCheckup.doCheckup();
    }
  
}
