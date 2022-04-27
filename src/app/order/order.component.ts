import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations'
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
  constructor(private router:Router, private journeyDetails:JourneyDetailsService) { }
  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.userJourney = this.journeyDetails.getUserJourney();
  }

  userJourney!:Journey;

 do()
 {
  this.router.navigate(['/thank-you']);
 }
 
}
