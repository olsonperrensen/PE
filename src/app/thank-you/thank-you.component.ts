import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div [ngClass]="{dark:switch_status,light:!switch_status}" class="modal-header">
      <h4 class="modal-title">Would you like to create an account?</h4>
      <button  
      [ngClass]="{darkb:switch_status,lightb:!switch_status}"
      type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div [ngClass]="{dark:switch_status,light:!switch_status}" class="modal-body">
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
      <button 
      [ngClass]="{darkb:switch_status,lightb:!switch_status}"
      type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `, 
  styles: [` 
  .dark { color: white; background-color: black; } 
  .darkb { filter: invert(1); } 
  .light{color: black; background-color: white;}
  .lightb {filter: invert(0); } 
  `]
})
export class NgbdModalContent implements OnInit{
  @Input() name: any;
  switch_status!:boolean
  constructor(public activeModal: NgbActiveModal,private darkModeStatus:DarkModeStatusService
    ) {
  }
ngOnInit(): void {
  this.switch_status = this.darkModeStatus.getStatus();
}
}

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    setTimeout(() => {
      this.progressBar.setProgressBar('reset');
    }, 800);
  }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.progressBar.setProgressBar('step5');
    const modalRef = this.modalService.open(NgbdModalContent,{ scrollable: true,centered:true },);
    modalRef.componentInstance.name = 'Bjorn';
  }
  constructor(private modalService: NgbModal, private darkModeStatus:DarkModeStatusService,
    private progressBar:ProgressBarService){}
}
