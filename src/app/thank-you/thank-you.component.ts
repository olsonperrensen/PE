import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Would you like to create an account?</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Get all the benefits from our app, {{name}}!</p>
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
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Bjorn';
  }
  constructor(private modalService: NgbModal){}
}
