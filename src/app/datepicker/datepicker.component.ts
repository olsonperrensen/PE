import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  cities = require("../../assets/cities.json");
  isFromValid:boolean = false;
  isToValid:boolean = false;
  isCity:boolean = true;
  isSame:boolean = false;
  codeFrom:string = ''
  codeTo:string = ''
  
  @ViewChild('f') f!: NgForm;
  
  constructor(private router:Router) { }


  ngOnInit(): void { 
   }

   trainValidator(form:NgForm)
   {
    for (let index = 0; index < this.cities['ArrayOfDMGa']['DMGa'].length; index++) {
     
      if(this.isFromValid&&this.isToValid)
      {
        if(this.codeFrom === this.codeTo)
      {
        this.isSame = true;
        this.isFromValid = false;
        this.isToValid = false;
      }
      else
      {
        break;
      }
      }

      const element:string = this.cities['ArrayOfDMGa']['DMGa'][index]['SKeys'];

      if(typeof element === typeof '')
      {
        if(element.includes(form.value['from'].toLowerCase()))
        {
          this.codeFrom = this.cities['ArrayOfDMGa']['DMGa'][index]['MaGa'];
          this.isFromValid = true;
        }
        if(element.includes(form.value['to'].toLowerCase()))
        {
          this.codeTo = this.cities['ArrayOfDMGa']['DMGa'][index]['MaGa'];
          this.isToValid = true;
        }
      }
    }
   }

  onSubmit(f:NgForm)
  {
    this.trainValidator(f);
    if(this.isFromValid&&this.isToValid)
    {
        this.router.navigate(['/table'+'/'+this.codeFrom+'/'+this.codeTo+'/'+f.value['date']]);
    }
    else
    {
      this.isCity = false;
    }
  }

  onNow()
  {
    this.f.form.patchValue({date:new Date().toISOString().split('T')[0]});
  }
}
