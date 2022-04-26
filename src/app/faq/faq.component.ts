import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations:[
    a.bounceInDownOnEnterAnimation(),
    a.bounceInLeftOnEnterAnimation(),
    a.bounceInRightOnEnterAnimation(),
    a.bounceInUpOnEnterAnimation()
  ]
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
