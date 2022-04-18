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
  codeFrom:string = '';
  codeTo:string = '';
  lat = 14.0583;
  lng = 108.2772;
  // reverse_key = 'AIzaSyCsTw56lFc40e_ObgyNVmQOQCung5JGL8w';
  // url:string=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${this.reverse_key}`

  @ViewChild('f') f!: NgForm;
  
  constructor(private router:Router) { }


  ngOnInit(): void { 
    if(!navigator.geolocation)
    {
      alert("Your browser does not support GeoLocation.");
    }
    else
    {
      navigator.geolocation.getCurrentPosition((pos)=>
      {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      })
    }
    // fetch(this.url).then(response => response.json()).then(
    //   data => {
    //     console.log(data)
    //   }
    // )  
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
      const exact:string = this.cities['ArrayOfDMGa']['DMGa'][index]['TenGa'];
      if(typeof element === typeof '')
      {
        if(
          element.includes(form.value['from'].toLowerCase())
          ||
          exact === form.value['from'])
        {
          this.codeFrom = this.cities['ArrayOfDMGa']['DMGa'][index]['MaGa'];
          this.isFromValid = true;
        }
        if(
          element.includes(form.value['to'].toLowerCase())
          ||
          exact === form.value['to'])
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
  onDemo()
  {
    this.f.setValue({date:new Date(2022, Math.random()*32, Math.random()*32)
      .toISOString().split('T')[0],
      from:this.cities['ArrayOfDMGa']['DMGa'][Math.round(Math.random()*172)]['TenGa'],
      to:this.cities['ArrayOfDMGa']['DMGa'][Math.round(Math.random()*172)]['TenGa']});
  }

  onChoseLocation(event:any)
  {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
