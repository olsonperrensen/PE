import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-details',
  templateUrl: './cookie-details.component.html',
  styleUrls: ['./cookie-details.component.css']
})
export class CookieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
  }

}
