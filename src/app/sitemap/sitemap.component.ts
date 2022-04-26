import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css'],
  animations:
  [
    a.rollInOnEnterAnimation(),
    a.zoomInOnEnterAnimation()
  ]
})
export class SitemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
 
  }

}
