import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
  animations:[
    a.
    rotateInUpRightOnEnterAnimation(),
    a.
    rotateInUpLeftOnEnterAnimation()
  ]
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
  }

}
