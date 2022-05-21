import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import { BasketService } from 'src/app/basket.service';
import { DarkModeStatusService } from 'src/app/dark-mode-status.service';
import { PlaceOrderService } from 'src/app/order/place-order.service';
import { UserDetails } from 'src/app/order/user-details';
import { Ticket } from 'src/app/table/ticket';
import { CancelTicketService } from './cancel-ticket.service';

@Component({
  selector: 'app-thank-you-details',
  templateUrl: './thank-you-details.component.html',
  styleUrls: ['./thank-you-details.component.css']
})
export class ThankYouDetailsComponent implements OnInit {
  switch_status!:boolean;
  public isBtnStill:boolean=true;

  @ViewChild('lorem') lorem!:ElementRef;
  tickets:Ticket[] = [];
  total = 0;

  constructor(private modalService: NgbModal,private darkModeStatus:DarkModeStatusService,
    private basketService:BasketService, private cancelTicket:CancelTicketService,
    private placeOrder:PlaceOrderService) { }

    onCancelTicket()
    {
      const lastOrder = this.placeOrder.getLastPlacedOrder();
      this.cancelTicket.cancelTicket(lastOrder.id).subscribe(
        (res)=>{alert(`Your ticket (Nr: ${lastOrder.id}, email: ${lastOrder.email}) has been successfully cancelled.`)},
        (error)=>{alert(`There was a problem canceling your ticket. 
      Error: ${error}`)});
    }

  public onCreatePDF(content:any)
  {
    this.modalService.open(content, { size: 'xl' });
    this.isBtnStill = false;
    setTimeout(() => {
      let pdf = new jsPDF('p','pt','a2');
      pdf.html(this.lorem.nativeElement,{callback:(pdf)=>{pdf.save("ticket.pdf");}});
      this.isBtnStill = true;
      this.modalService.dismissAll();
    }, 1000);
  }
  ngOnInit(): void {
    this.darkModeStatus.getStatus().subscribe((status:any) =>
    {
      this.switch_status = status;

    });
    this.tickets = this.basketService.getBasket();
    this.tickets.forEach(ticket => {
      this.total += ticket.price;
    });
  }
}

