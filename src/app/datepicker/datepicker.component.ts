import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Journey } from '../table/journey';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @ViewChild('fromInput',{static:true}) fromInput!:ElementRef;
  @ViewChild('toInput',{static:true}) toInput!:ElementRef;

  constructor(private router:Router) { }

  @ViewChild('toInput') to!:ElementRef;
  @ViewChild('fromInput') from!:ElementRef;
  @ViewChild('d') d!:ElementRef;

  user_journey!:Journey;

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
      this.user_journey = {
        from: this.from.nativeElement.value,
        to: this.to.nativeElement.value,
        day: this.d.nativeElement.value
      }
      this.router.navigate(['/','table',this.user_journey.from,this.user_journey.to,this.user_journey.day]);
    }
  }
}
