import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-thank-you-details',
  templateUrl: './thank-you-details.component.html',
  styleUrls: ['./thank-you-details.component.css']
})
export class ThankYouDetailsComponent implements OnInit {

  public isBtnStill:boolean=true;

  @ViewChild('lorem') lorem!:ElementRef;

  constructor(private modalService: NgbModal) { }

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
  }

}

