import { Component, OnInit } from '@angular/core';
import * as animations from 'angular-animations';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-help-contact',
  templateUrl: './help-contact.component.html',
  styleUrls: ['./help-contact.component.css'],
  animations: [
    animations.fadeInOnEnterAnimation(),
    animations.fadeOutOnLeaveAnimation(),
    animations.rollInOnEnterAnimation(),
    
  ] 
})
export class HelpContactComponent implements OnInit {
  arrow = faArrowRight
  constructor() { }

  ngOnInit(): void {
  }

}
