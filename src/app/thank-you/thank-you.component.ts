import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DarkModeStatusService } from '../dark-mode-status.service';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Would you like to create an account?</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Get all the benefits from our app, {{name}}!</p>
      <p> 
                   With an account, you can easily:</p>
            <div class="bodyItem__text">
                <div class="richText" data-controller="generic/ui/RichText" data-config="{&quot;mode&quot;:&quot;responsiveTable&quot;}" data-type="cms-Tekst">
                    <ul>
         <li>
         <p><strong>Manage your account</strong><br>
        By going to 'My details' , you can edit your personal details and subscribe to or unsubscribe from the NS newsletter.</p>
         </li>
        </ul>
        
        <ul>
         <p><li><strong>Product status</strong><br>
        By going to 'My products', you can view&nbsp;your NS products and check the remaining time on your&nbsp;season ticket or the status of your Keuzedagen.</li>
    </p></ul>
        
        <ul>
         <li>
         <p><strong>Order status</strong><br>
         For a full summary of your NS orders and their statuses,&nbsp;go to 'My Orders'.</p>
         </li>
                  <li>
         <p><strong>View travel history</strong><br>
         You can find a list of all your trips and the corresponding costs&nbsp;over the past 18 months by going to 'My travel history' . You can also add notes or print a summary to add to your expense claim.</p>
         </li>
         <li>
         <p><strong>View invoices</strong></li>
        </ul>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" 
    routerLink="signup"
    (click)="activeModal.close('Close click')"
    >Yes</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  
  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    
    const modalRef = this.modalService.open(NgbdModalContent,{ scrollable: true,centered:true },);
    modalRef.componentInstance.name = 'Bjorn';
  }
  constructor(private modalService: NgbModal, private darkModeStatus:DarkModeStatusService){}
}
