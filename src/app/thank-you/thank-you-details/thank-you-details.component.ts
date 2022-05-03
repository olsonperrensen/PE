import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import { BasketService } from 'src/app/basket.service';
import { DarkModeStatusService } from 'src/app/dark-mode-status.service';
import { Ticket } from 'src/app/table/ticket';

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
    private basketService:BasketService) { }

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
    this.switch_status = this.darkModeStatus.getStatus();
    this.tickets = this.basketService.getBasket();
    this.tickets.forEach(ticket => {
      this.total += ticket.price;
    });
  }

}

