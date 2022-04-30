import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations'
import { DarkModeStatusService } from '../dark-mode-status.service';
import { NgForm, NgModel } from '@angular/forms';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
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
  isTable!:boolean;

  constructor(private router:Router, private route:ActivatedRoute, private journeyDetails:JourneyDetailsService,
    private darkModeStatus:DarkModeStatusService, private progressBar:ProgressBarService) { }
  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    if(this.route.snapshot.queryParams['isTable']==='1')
    {
      this.isTable = true;
    }
    this.userJourney = this.journeyDetails.getUserJourney();
    this.switch_status = this.darkModeStatus.getStatus();
    this.progressBar.setProgressBar('step4');
  }

  userJourney!:Journey;
 do()
 {
  this.router.navigate(['/thank-you']);
  this.progressBar.setProgressBar('step5');
 }
 onSubmit(f:NgForm)
 {
   console.log(f);  
 }
}
