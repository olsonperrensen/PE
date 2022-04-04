import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Output('ealias') child = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  model!: NgbDateStruct;

  onClick()
  {
    this.child.emit('table');
  }
}
