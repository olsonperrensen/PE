import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @ViewChild('fromInput',{static:true}) fromInput!:ElementRef;
  @ViewChild('toInput',{static:true}) toInput!:ElementRef;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  model!: NgbDateStruct;

  submit()
  {
    if(this.fromInput.nativeElement.value.length < 1 
      ||
      this.toInput.nativeElement.value.length < 1 )
    {
      this.router.navigate(['/error']);
    }
    else
    {
      this.router.navigate(['/table']);
    }
  }
}
