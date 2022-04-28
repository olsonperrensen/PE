import { Component, OnInit } from '@angular/core';
import *  as a from 'angular-animations';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[
    a.fadeInOnEnterAnimation(),
    a.slideInLeftOnEnterAnimation(),
    a.slideOutRightAnimation()
  ]
})
export class AboutUsComponent implements OnInit{

  first_visible:boolean=true;
  anim_out:boolean=false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.first_visible = !this.first_visible;
    }, 5000);
    if(this.first_visible)
    {
      setInterval(() => {
        this.anim_out = !this.anim_out;
      }, 4000);
    }
  }

}
