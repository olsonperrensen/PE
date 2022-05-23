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
import { GetTableService } from './get-table.service';
import { TableRow } from './TableRow';
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
  NghiTemp!:TableRow[];
  NghiTempSlice!:TableRow[];
  
  onGetTables()
  {
    this.getTable.getTable().subscribe((res:TableRow[]) => {
      this.NghiTemp = res;
    });
    this.getTable.getSmallTable().subscribe((res:TableRow[])=>{
      this.NghiTempSlice = res;
    });
  }

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
    private progressBar:ProgressBarService, private basketService:BasketService, 
    private getTable: GetTableService) { }

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
    setTimeout(() => {
      window.location.reload();
    }, 600000);
    // Prior to observables
    // this.NghiTempSlice.push({CITY: "...", KM: "...", DATE: "...", "ARRIVEHR": "...", "LEAVEHR": "..."})

    this.onGetTables();

    this.darkModeStatus.getStatus().subscribe((status:any) =>
    {
      this.switch_status = status;

    });

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
