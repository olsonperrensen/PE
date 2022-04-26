import { Component, OnInit } from '@angular/core';
import *  as a from 'angular-animations';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[
    a.fadeInOnEnterAnimation()
  ]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
