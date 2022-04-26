import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traintype',
  templateUrl: './traintype.component.html',
  styleUrls: ['./traintype.component.css']
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
