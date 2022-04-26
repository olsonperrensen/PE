import { Component, OnInit } from '@angular/core';
import * as animations from 'angular-animations';
@Component({
  selector: 'app-help-contact',
  templateUrl: './help-contact.component.html',
  styleUrls: ['./help-contact.component.css'],
  animations: [
    animations.fadeInOnEnterAnimation(),
    animations.fadeOutOnLeaveAnimation()
  ] 
})
export class HelpContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
