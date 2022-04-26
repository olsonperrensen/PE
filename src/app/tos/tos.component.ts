import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css']
})
export class TOSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
  }

}
