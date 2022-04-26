import { Component, OnInit } from '@angular/core';
import *  as a from 'angular-animations';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations:[
    a.fadeInOnEnterAnimation()
  ]
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
