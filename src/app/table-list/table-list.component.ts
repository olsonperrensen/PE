import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  headers:string[]=['Tên Ga','KM', 'SE7','SE5','SE9','SE3','SE1'];
  constructor() { }

  ngOnInit(): void {
  }

}
