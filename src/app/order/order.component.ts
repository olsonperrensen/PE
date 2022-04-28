import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations'
import { DarkModeStatusService } from '../dark-mode-status.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations:
  [
    a.fadeInOnEnterAnimation()
  ]
})
export class OrderComponent implements OnInit {

  switch_status!:boolean;

  constructor(private router:Router, private journeyDetails:JourneyDetailsService,
    private darkModeStatus:DarkModeStatusService) { }
  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.userJourney = this.journeyDetails.getUserJourney();
    this.switch_status = this.darkModeStatus.getStatus();
  }

  userJourney!:Journey;

 do()
 {
  this.router.navigate(['/thank-you']);
 }
 
}
