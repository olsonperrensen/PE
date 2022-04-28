import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:[
    a.tadaAnimation(),
    a.heartBeatAnimation()
  ]
})
export class FooterComponent implements OnInit {
  constructor() { }
  isLinkMouseOver:boolean = false;
  isGNUMouseOver:boolean = false;
  onLinkMouseOver()
  {
    this.isLinkMouseOver = true;
    setTimeout(() => {
      this.isLinkMouseOver = false;  
    }, 2800);
  }
  onGNUMouseOver()
  {
    this.isGNUMouseOver = true;
    setTimeout(() => {
      this.isGNUMouseOver = false;  
    }, 2800);
  }
  ngOnInit(): void {
  }

}
