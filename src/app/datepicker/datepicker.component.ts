import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  animations: [
    a.fadeInLeftOnEnterAnimation(),
    a.fadeInUpOnEnterAnimation() 
  ]
})


export class DatepickerComponent implements OnInit, OnDestroy {
  // native-actions
  constructor(private router:Router, private journeyDetails:JourneyDetailsService) { }
  ngOnInit(): void { 
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.reverseLookup(); 
   }
  ngOnDestroy(): void {
    this.journeyDetails.setUserJourney(this.userJourney);
  }

  // JSON list of cities
  cities = require("../../assets/cities.json");
  
  // booleans
  isFromValid:boolean = false;
  isToValid:boolean = false;
  isCity:boolean = true;
  isSame:boolean = false;
 
  // Journey object
  userJourney:Journey = new Journey();

  // Google Maps coordinates + API key
  lat = 10.8231;
  lng = 106.6297;
  privateKey = 'AIzaSyCsTw56lFc40e_ObgyNVmQOQCung5JGL8w';

  // Register html form
  @ViewChild('f') f!: NgForm;

  // ~~ FUNCTIONS appear as visually structured in our page (from top to bottom) ~~
    // Random selection of valid cities so the user can quickly try the app.
    onDemo()
    {
      // Logical (random) date from 2022 onwards. 
      this.f.setValue({date:new Date(2022, Math.random()*32, Math.random()*32)
        .toISOString().split('T')[0],
        from:this.cities['ArrayOfDMGa']['DMGa'][Math.round(Math.random()*172)]['TenGa'],
        to:this.cities['ArrayOfDMGa']['DMGa'][Math.round(Math.random()*172)]['TenGa']});
    }

  // Retrieve GPS coordinates from the user's computer.
  onUserLocation()
  {
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
  }

  // Get a working, real-time date inserted to the form.
  onNow()
  {
    this.f.form.patchValue({date:new Date().toISOString().split('T')[0]});
  }

  onSubmit(f:NgForm)
  {
    // Own validation to check traveling makes sense. (for more details, see the function)
    this.trainValidator(f);

    // Continue to the next 'step' in buying tickets. 
    if(this.isFromValid&&this.isToValid)
    {
     //   this.router.navigate(['/table'+'/'+this.userJourney.from+'/'+this.userJourney.to+'/'+f.value['date']]);
      this.router.navigate(['train-type'])
    }
    // Activate hints in CSS (see *ngIf).
    else 
    {
      this.isCity = false;
    }
  }

    // Insert user values into Journey object.
   trainValidator(form:NgForm)
   {
     this.userJourney.date = form.value['date'];
    // Check whether user input is in database
    for (let index = 0; index < this.cities['ArrayOfDMGa']['DMGa'].length; index++) {
      
      // After n number of interations (we hope the cities have been found)
      // Prevent nonsense travelling (same city twice)  
      if(this.isFromValid&&this.isToValid){if(this.userJourney.from === this.userJourney.to){
          this.isSame = true;
          this.isFromValid = false;
          this.isToValid = false;}else{break;}}

      // Here we get two arrays containing common words (keywords) and exact matches (Unicode)
      // throughout all of our .db records. We will compare them to user input later.
      const element:string = this.cities['ArrayOfDMGa']['DMGa'][index]['SKeys'];
      const exact:string = this.cities['ArrayOfDMGa']['DMGa'][index]['TenGa'];
      
      // Check whether a record inside JSON .db actually contains a list (and is not empty) 
      if(typeof element === typeof '')
      {
        //  We hope our user departure matches a real city in our database, either though
        // common words (keywords) or an exact match (with Vietnamese characters -> Unicode) 
        if(element.includes(form.value['from'].toLowerCase())||exact === form.value['from'])
        {
          this.userJourney.from = this.cities['ArrayOfDMGa']['DMGa'][index]['MaGa'];
          // Own healthy check that says the city has been found.
          this.isFromValid = true;
        }
         //  We hope our user arrival matches a real city in our database, either though
        // common words (keywords) or an exact match (with Vietnamese characters -> Unicode) 
        if(element.includes(form.value['to'].toLowerCase())||exact === form.value['to'])
        {
          this.userJourney.to = this.cities['ArrayOfDMGa']['DMGa'][index]['MaGa'];
          // Own healthy check that says the city has been found.
          this.isToValid = true;
        }
      }
    }
   }

  // Convert where the user clicked on our map to coordinates and translate them into
  // the nearest city.
  onChoseLocation(event:any)
  {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.reverseLookup();
  }

  // GPS Coordinates to City name translation
  reverseLookup()
  { 
    // We are using the Google Maps API (more specifically: GeoCode) to get an object back.
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${this.privateKey}`)
    .then(response => response.json()).then(
      data => {
        data.results.forEach((element: any) => {
          // This mostly works for cities inside of Vietnam. For Belgium it is a bit tricker.
          if(element.types.includes("administrative_area_level_1"))
          {
            this.f.form.patchValue({from:element.formatted_address.split(',')[0]});
          }
        });
      }
    ) 
  }
}