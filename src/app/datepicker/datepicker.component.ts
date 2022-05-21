import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { TranslateService } from '@ngx-translate/core';
import { GetGpsMarkerService } from './get-gps-marker.service';
import { GpsMarker } from './gps-marker';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  animations: [
    a.fadeInLeftOnEnterAnimation(),
    a.fadeInUpOnEnterAnimation(),
    a.fadeOutRightAnimation(),
    a.fadeOutRightOnLeaveAnimation(),
    a.jackInTheBoxOnEnterAnimation(),
    a.hueRotateAnimation()
  ]
})


export class DatepickerComponent implements OnInit, OnDestroy, AfterViewInit {

  css_i:number = 100;
  myInterval!:ReturnType<typeof setInterval>
  ngAfterViewInit(): void {
    this.myInterval = setInterval(() => {
      if(this.css_i >= 1111)
      {
        this.css_i = 0;
      }
      this.R2.setStyle(this.demo.nativeElement,'background-color',`#${this.css_i}`);
      this.css_i = this.css_i+50;
    }, 170);
    this.onUserLocation();
    
  }
  @ViewChild('demo') demo !:ElementRef;

  today = new Date().toISOString().split('T')[0];
  switch_status!:boolean;
  isBtnClicked:boolean = false;
  minTravelDate:any;
  // native-actions
  constructor(private router:Router, private journeyDetails:JourneyDetailsService,
    private darkModeStatus:DarkModeStatusService, private R2:Renderer2, 
    private progressBar:ProgressBarService, private translateService: TranslateService,
    private getGpsMarker:GetGpsMarkerService) { }
  ngOnInit(): void { 
    this.getGpsMarkers();
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.reverseLookup(); 
    this.darkModeStatus.getStatus().subscribe((status:any) =>
    {
      this.switch_status = status;
      console.log("status",this.switch_status);

    });
    this.progressBar.setProgressBar('step1');
   }
  ngOnDestroy(): void {
    this.journeyDetails.setUserJourney(this.userJourney);
  }

  getGpsMarkers()
  {
    this.getGpsMarker.getGpsMarker().subscribe((res:any)=>{this.markers = res});
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
  lat = 0
  lng = 0;
  theta = 0;
  distance = 0;
  privateKey = 'AIzaSyCsTw56lFc40e_ObgyNVmQOQCung5JGL8w';
  markers!:GpsMarker[];
closest_distance = -1;
closest_station = '';
isFullAddress = false;
user_full_address:any;

  // Register html form
  @ViewChild('f') f!: NgForm;

  // ~~ FUNCTIONS appear as visually structured in our page (from top to bottom) ~~
    // Random selection of valid cities so the user can quickly try the app.
    onDemo()
    {
      clearInterval(this.myInterval);
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
      });
      this.markers.forEach(marker => {
        this.theta = +marker.lng - this.lng;
        this.distance = Math.sin(this.lng*(Math.PI/180)) * 
        Math.sin(+marker.lng*(Math.PI/180)) +
        Math.cos(this.lng*(Math.PI/180)) * 
        Math.cos(+marker.lng*(Math.PI/180)) *
        Math.cos(this.theta*(Math.PI/180));
        this.distance = Math.acos(this.distance);
        this.distance = this.distance * (180/Math.PI);
        this.distance = this.distance  * 60 * 1.1515;
        this.distance = this.distance / 0.62137;
        if(this.distance > this.closest_distance)
        {
          this.closest_distance = Math.round(this.distance);
          this.closest_station = marker.name;
        }
        
      });
      this.f.form.patchValue({from:this.closest_station});
      console.log(`${this.closest_distance} KM to ${this.closest_station}`);
    }
  // We are using the Google Maps API (more specifically: GeoCode) to get an object back.
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${this.privateKey}`)
  .then(response => response.json()).then(
    data => {
      data.results.forEach((element: any) => {
        // This mostly works for cities inside of Vietnam. For Belgium it is a bit tricker.
        if(element.types.includes("administrative_area_level_3"))
        {
          this.isFullAddress = true;
          this.user_full_address = element.formatted_address; 
        }
      });
    }
  );  
  }

  // Get a working, real-time date inserted to the form.
  onNow()
  {
    this.f.form.patchValue({date:new Date().toISOString().split('T')[0]});
  }

  onSubmit(f:NgForm)
  {
    this.isBtnClicked = true;
    
    setTimeout(() => {
      // Own validation to check traveling makes sense. (for more details, see the function)
    this.trainValidator(f);

    // Continue to the next 'step' in buying tickets. 
    if(this.isFromValid&&this.isToValid)
    {
     //   this.router.navigate(['/table'+'/'+this.userJourney.from+'/'+this.userJourney.to+'/'+f.value['date']]);
      this.router.navigate(['train-type']);
      this.progressBar.setProgressBar('step2');
    }
    // Activate hints in CSS (see *ngIf).
    else 
    {
      this.isCity = false;
    }
    }, 600);
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
    // this.onUserLocation();
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
    ); 
  }
}