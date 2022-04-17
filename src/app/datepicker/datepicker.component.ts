import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @ViewChild('f') f!: NgForm;
  
  constructor(private router:Router) { }


  ngOnInit(): void {  }

  onSubmit(f:NgForm)
  {
    this.router.navigate(['/table'+'/'+f.value['from']+'/'+f.value['to']+'/'+f.value['date']])
  }

  onNow()
  {
    this.f.form.patchValue({date:new Date().toISOString().split('T')[0]});
  }
}
