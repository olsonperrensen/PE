import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-traintype',
  templateUrl: './traintype.component.html',
  styleUrls: ['./traintype.component.css'],
  animations:[
    a.fadeInOnEnterAnimation(),
    a.slideInDownOnEnterAnimation()
  ]
})
export class TraintypeComponent implements OnInit {
  isFetching:boolean=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isFetching = false;
    }, 300);
  }

}
