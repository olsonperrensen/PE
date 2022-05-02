import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
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
  }
  @ViewChild('demo') demo !:ElementRef;

  switch_status!:boolean;
  isBtnClicked:boolean = false;
  
  // native-actions
  constructor(private router:Router, private journeyDetails:JourneyDetailsService,
    private darkModeStatus:DarkModeStatusService, private R2:Renderer2, private progressBar:ProgressBarService) { }
  ngOnInit(): void { 
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.reverseLookup(); 
    this.switch_status = this.darkModeStatus.getStatus();
    this.progressBar.setProgressBar('step1');
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
  lat = 21.027430029169917;
  lng = 105.8351785397227;
  privateKey = 'AIzaSyCsTw56lFc40e_ObgyNVmQOQCung5JGL8w';
  markers = [
    {
        "id": "1",
        "lat": "10.782522909849995",
        "lng": "106.67749116477299",
        "name": "Saigon"
    }, 
    {
        "id": "2",
        "lat": "21.027430029169917",
        "lng": "105.8351785397227",
        "name": "Hanoi"
    }, 
    {
        "id": "3",
        "lat": "10.91048586855566",
        "lng": "106.7700021764381",
        "name": "Di An"
    }, 
    {
        "id": "4",
        "lat": "10.950892026486155",
        "lng": "106.82626529542068",
        "name": "Bien Hoa"
    }, 
    {
        "id": "5",
        "lat": "10.933770362600766",
        "lng": "107.24441652610201",
        "name": "Long Khanh"
    }, 
    {
        "id": "6",
        "lat": "10.94183712599927",
        "lng": "108.08225633775021",
        "name": "Phan Thiet"
    }, 
    {
        "id": "7",
        "lat": "12.248619760484605",
        "lng": "109.1841939819382",
        "name": "Nha Trang"
    }
    , 
    {
        "id": "8",
        "lat": "13.08811909077955",
        "lng": "109.29727929728732",
        "name": "Tuy Hoa"
    }
    , 
    {
        "id": "9",
        "lat": "13.807288472583728",
        "lng": "109.14373079729492",
        "name": "Dieu Tri"
    }
    , 
    {
        "id": "10",
        "lat": "14.438184449803291",
        "lng": "109.01936044332425",
        "name": "Bồng Sơn"
    }, 
    {
        "id": "11",
        "lat": "15.121164507365517",
        "lng": "108.78152275867305",
        "name": "Quảng Ngãi"
    },
    {
        "id": "12",
        "lat": "15.557938968130504",
        "lng": "108.48299978382066",
        "name": "Tam Ky"
    }
    , 
    {
        "id": "13",
        "lat": "15.81030915635876",
        "lng": "108.23146018751659",
        "name": "Tra Kieu"
    }, 
    {
        "id": "14",
        "lat": "16.07159654130862",
        "lng": "108.20936321266223",
        "name": "Da Nang"
    }
    , 
    {
        "id": "15",
        "lat": "16.457441760330315",
        "lng": "107.57813098968283",
        "name": "Hue"
    }, 
    {
        "id": "16",
        "lat": "16.811403043084642",
        "lng": "107.11187814150696",
        "name": "Dong Ha"
    }
    , 
    {
        "id": "17",
        "lat": "17.469127564219196",
        "lng": "106.59997974336227",
        "name": "Dong Hoi"
    }, 
    {
        "id": "18",
        "lat": "17.88993521689391",
        "lng": "106.0216335562631",
        "name": "Dong Le"
    }
    , 
    {
        "id": "19",
        "lat": "18.688197740004203",
        "lng": "105.66403429735706",
        "name": "Vinh"
    }   , 
    {
        "id": "20",
        "lat": "19.812919811542447",
        "lng": "105.7679245433963",
        "name": "Thanh Hoa"
    }  
    , 
    {
        "id": "21",
        "lat": "20.242190582318173",
        "lng": "105.97495255078849",
        "name": "Ninh Binh"
    }
    , 
    {
        "id": "22",
        "lat": "20.421522668120183",
        "lng": "106.16451479922983",
        "name": "Nam Dinh"
    }    
    , 
    {
        "id": "23",
        "lat": "20.421522668120183",
        "lng": "106.16451479922983",
        "name": "Nam Dinh"
    } 
    , 
    {
        "id": "24",
        "lat": "20.540695666662106",
        "lng": "105.91303641272619",
        "name": "Phu Ly"
    }    
];

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