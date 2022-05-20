import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyCheckupService } from '../journey-checkup.service';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations';
import { faMinus,faPlus, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { BasketService } from '../basket.service';
import {Ticket } from './ticket'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations:
  [
    a.jackInTheBoxOnEnterAnimation(),
    a.slideInUpOnEnterAnimation(),
    a.flipInXOnEnterAnimation(),
    a.flipInYOnEnterAnimation(),
    a.rotateInAnimation(),
    a.fadeOutDownAnimation()
  ]
})
export class TableComponent implements OnInit{

  public_rows = 0;

  switch_status!:boolean;
  shouldAsk!:boolean;
  @ViewChild('tr1') tr1!:ElementRef;

  faMinus = faMinus;
  faPlus = faPlus;
  faArrowDown = faArrowDownLong;
  ticket:Ticket = {name:'',code:'',price:0};
  ticket_quantity = 0;

  NghiTemp = [
    {"CITY": "S\u00e0i G\u00f2n", "KM": "0", "DATE": "13/04/2022", "ARRIVEHR": "20:10", "LEAVEHR": "20:10"}, {"CITY": "D\u0129 An", "KM": "19", "DATE": "13/04/2022", "ARRIVEHR": "20:39", "LEAVEHR": "20:42"}, {"CITY": "Bi\u00ean H\u00f2a", "KM": "29", "DATE": "13/04/2022", "ARRIVEHR": "20:54", "LEAVEHR": "20:57"}, {"CITY": "Long Kh\u00e1nh", "KM": "77", "DATE": "13/04/2022", "ARRIVEHR": "21:57", "LEAVEHR": "22:00"}, {"CITY": "B\u00ecnh Thu\u1eadn", "KM": "175", "DATE": "13/04/2022", "ARRIVEHR": "23:51", "LEAVEHR": "23:56"}, {"CITY": "Nha Trang", "KM": "411", "DATE": "14/04/2022", "ARRIVEHR": "04:16", "LEAVEHR": "04:23"}, {"CITY": "Tuy Ho\u00e0", "KM": "528", "DATE": "14/04/2022", "ARRIVEHR": "06:39", "LEAVEHR": "06:42"}, {"CITY": "Di\u00eau Tr\u00ec", "KM": "630", "DATE": "14/04/2022", "ARRIVEHR": "08:39", "LEAVEHR": "08:54"}, {"CITY": "B\u1ed3ng S\u01a1n", "KM": "709", "DATE": "14/04/2022", "ARRIVEHR": "10:21", "LEAVEHR": "10:24"}, {"CITY": "Qu\u1ea3ng Ng\u00e3i", "KM": "798", "DATE": "14/04/2022", "ARRIVEHR": "11:55", "LEAVEHR": "12:00"}, {"CITY": "Tam K\u1ef3", "KM": "861", "DATE": "14/04/2022", "ARRIVEHR": "13:06", "LEAVEHR": "13:09"}, {"CITY": "Tr\u00e0 Ki\u1ec7u", "KM": "901", "DATE": "14/04/2022", "ARRIVEHR": "14:05", "LEAVEHR": "14:08"}, {"CITY": "\u0110\u00e0 N\u1eb5ng", "KM": "935", "DATE": "14/04/2022", "ARRIVEHR": "14:51", "LEAVEHR": "15:16"}, {"CITY": "Hu\u1ebf", "KM": "1038", "DATE": "14/04/2022", "ARRIVEHR": "17:48", "LEAVEHR": "17:55"}, {"CITY": "\u0110\u00f4ng H\u00e0", "KM": "1104", "DATE": "14/04/2022", "ARRIVEHR": "19:14", "LEAVEHR": "19:17"}, {"CITY": "\u0110\u1ed3ng H\u1edbi", "KM": "1204", "DATE": "14/04/2022", "ARRIVEHR": "21:00", "LEAVEHR": "21:15"}, {"CITY": "\u0110\u1ed3ng L\u00ea", "KM": "1290", "DATE": "14/04/2022", "ARRIVEHR": "23:03", "LEAVEHR": "23:06"}, {"CITY": "H\u01b0\u01a1ng Ph\u1ed1", "KM": "1339", "DATE": "15/04/2022", "ARRIVEHR": "00:09", "LEAVEHR": "00:12"}, {"CITY": "Y\u00ean Trung", "KM": "1386", "DATE": "15/04/2022", "ARRIVEHR": "01:10", "LEAVEHR": "01:13"}, {"CITY": "Vinh", "KM": "1407", "DATE": "15/04/2022", "ARRIVEHR": "01:38", "LEAVEHR": "01:48"}, {"CITY": "Thanh Ho\u00e1", "KM": "1551", "DATE": "15/04/2022", "ARRIVEHR": "04:27", "LEAVEHR": "04:30"}, {"CITY": "Ninh B\u00ecnh", "KM": "1611", "DATE": "15/04/2022", "ARRIVEHR": "05:39", "LEAVEHR": "05:42"}, {"CITY": "Nam \u0110\u1ecbnh", "KM": "1639", "DATE": "15/04/2022", "ARRIVEHR": "06:14", "LEAVEHR": "06:17"}, {"CITY": "Ph\u1ee7 L\u00fd", "KM": "1670", "DATE": "15/04/2022", "ARRIVEHR": "06:56", "LEAVEHR": "07:08"}, {"CITY": "H\u00e0 N\u1ed9i", "KM": "1726", "DATE": "15/04/2022", "ARRIVEHR": "08:21", "LEAVEHR": "08:21"}
  ]
  NghiTempSlice = this.NghiTemp.slice(0,3);

  userJourney!:Journey;

  isFetching:boolean=true;
  isDatepicker:boolean=true;
  isMinusSignHovered:boolean=false;
  isPlusSignHovered:boolean=false;
  isExpanding:boolean=false;
  isExpandingAnim:boolean=false;
  
  
  constructor(private router:Router, private aRoute: ActivatedRoute, 
    private journeyDetails:JourneyDetailsService, private journeyCheckup:JourneyCheckupService,
    private R2: Renderer2,private darkModeStatus:DarkModeStatusService, 
    private progressBar:ProgressBarService, private basketService:BasketService) { }

    onMouseOver(str:string)
    {
      if(str === 'minus')
      {
        this.isMinusSignHovered = true;
        this.isPlusSignHovered = false;
      }
      else
      {
        this.isPlusSignHovered = true;
        this.isMinusSignHovered = false;
      }
    }

  ngOnInit(): void {

    this.NghiTempSlice.push({CITY: "...", KM: "...", DATE: "...", "ARRIVEHR": "...", "LEAVEHR": "..."})

    this.switch_status = this.darkModeStatus.getStatus();

    // DEPRECATED 

    // this.userJourney = {
    //   from: this.aRoute.snapshot.params['from'],
    //   to: this.aRoute.snapshot.params['to'],
    //   date: this.aRoute.snapshot.params['date'],
    // }

    // Service integration 
    this.userJourney = this.journeyDetails.getUserJourney();

    console.log(`From table.component:${this.userJourney.from}-${this.userJourney.to}-${this.userJourney.date}`);

    setTimeout(() => {
      this.isFetching = false;
    }, 300);

    this.progressBar.setProgressBar('step3');
  }

  // Go to the next 'step'
  public onClick()
  {
    /*if(!this.isDatepicker)
    {
      this.router.navigate(['order']);
    }*/
    if(this.journeyCheckup.doCheckup())
    {
      this.isDatepicker = true;
      this.router.navigate(['order'],{queryParams:{'isTable':1}});
      this.progressBar.setProgressBar('step4');
    }
    else
    {
      this.isDatepicker = false;

    }
  }

  onAddTicket(f:NgForm)
  {
    this.ticket.name = f.value.ticket_name;
    switch (this.ticket.name) {
      case 'first_class':
        this.ticket.code = 'FC';
        this.ticket.price = 5; 
        break;
        case 'second_class':
          this.ticket.code = 'SC';
          this.ticket.price = 10;
        break;
        case 'standing':
          this.ticket.code = 'ST';
          this.ticket.price = 20;
        break;
    
      default:
        this.ticket.price = 0;
        break;
    }
    this.ticket_quantity++;
    if(this.ticket_quantity > 10)
    {
      this.shouldAsk = true;
    }
    this.basketService.addToBasket(this.ticket);
    
  }

  reset_form(f:NgForm) 
  {
    this.ticket_quantity = 0;
  }


  onRemoveTicket(f:NgForm)
  {
    this.basketService.removeFromBasket(this.ticket);
    if(this.ticket_quantity === 0)
    {
      return;
    }
    else
    {
      this.ticket_quantity--;
    }
  }

  onSubmit(f:NgForm)
  {
    console.log(f);
    this.onClick();
  }

  onExpandClick()
  {
    this.isExpandingAnim = true;
    setTimeout(() => {
      this.isExpanding = true;
    }, 200);
  }
}
