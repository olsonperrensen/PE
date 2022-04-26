import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
 
  }

}
