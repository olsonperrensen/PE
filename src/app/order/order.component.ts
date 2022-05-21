import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyDetailsService } from '../journey-details.service';
import * as a from 'angular-animations'
import { DarkModeStatusService } from '../dark-mode-status.service';
import { NgForm, NgModel } from '@angular/forms';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { BasketService } from '../basket.service';
import { Ticket } from '../table/ticket';
import {faClose} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations:
  [
    a.fadeInOnEnterAnimation()
  ]
})
export class OrderComponent implements OnInit {

  switch_status!:boolean;
  isTable!:boolean;
  isEditTicketsEnabled:boolean = false;
  total_tickets = 0;
  total = 0;
  tickets!:Ticket[];
  isValid = false;
  coupon = '';
  faClose = faClose;
  previousIndex = 0;
  editCounter = 0;

  constructor(private router:Router, private route:ActivatedRoute, private journeyDetails:JourneyDetailsService,
    private darkModeStatus:DarkModeStatusService, private progressBar:ProgressBarService,
    private basketService:BasketService) { }

    mFn(event:{valid:boolean,coupon:string})
    {
      this.isValid = event.valid;
      this.coupon = event.coupon;
      if(this.total > 5)
      {
        this.total -= 5;
      }
    }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    if(this.route.snapshot.queryParams['isTable']==='1')
    {
      this.isTable = true;
    }
    this.userJourney = this.journeyDetails.getUserJourney();
    this.darkModeStatus.getStatus().subscribe((status:any) =>
    {
      this.switch_status = status;

    });
    this.progressBar.setProgressBar('step4');
    this.tickets = this.basketService.getBasket();
    this.total_tickets = this.tickets.length;
    this.tickets.forEach(ticket => {
      this.total += ticket.price;
    });
  }

  userJourney!:Journey;
 do()
 {
  this.router.navigate(['/thank-you']);
  this.progressBar.setProgressBar('step5');
 }
 onSubmit(f:NgForm)
 {
   console.log(f);  
 }

 onEditTickets()
 {
   this.isEditTicketsEnabled = !this.isEditTicketsEnabled;
 }
 onEditTicket(select:NgModel,ticket:Ticket, index:number)
 {
   if(index !== this.previousIndex)
   {
    this.total -= ticket.price; 
   }
  //  ticket.name = select.value;
   ticket.price =
    select.value === 'second_class'? 10 
    : 
    select.value === 'first_class'?5 
    :
    select.value === 'standing'?20 
    : 0
    ;
    if(this.editCounter < this.tickets.length)
    {
      this.total += 
   select.value === 'second_class'? 10 
   : 
   select.value === 'first_class'?5 
   :
   select.value === 'standing'?20 
   : 0
   ;
    }
    this.previousIndex = index;
    this.editCounter++;
 }
 onRemoveTicket(ticket:any)
 {
   if(this.total_tickets > 1 && this.total > ticket.price)
  {
    this.basketService.removeFromBasket(ticket);
    this.total -= ticket.price;
    this.total_tickets -= 1;
  }
 }
}
