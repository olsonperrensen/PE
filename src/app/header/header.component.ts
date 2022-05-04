import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';
import { isEmpty, Observable } from 'rxjs';
import { DarkModeStatusService } from '../dark-mode-status.service';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { BasketService } from '../basket.service';
import { Ticket } from '../table/ticket';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  ngAfterViewInit(): void {
  }

  @ViewChild('switch') switch!:HTMLInputElement;
  switch_status!:boolean;
  faShoppingCart = faShoppingCart;
  isBasketEmpty = true;


  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
 
  constructor(private darkModeService: DarkModeService,
    private darkModeStatus:DarkModeStatusService, private R2:Renderer2,
    private basketService:BasketService) {}
 
  onToggle(): void {
    this.darkModeService.toggle();
    this.darkModeStatus.setStatus(Boolean(this.switch.value));
    // localStorage.setItem('theme',`${Boolean(this.switch.value)}`)
    window.location.reload();
  }

  ngOnInit(): void {
    if(localStorage.getItem('dark-mode')==='{"darkMode":false}')
    {
      this.darkModeStatus.setStatus(false);
      this.switch_status = false;
    }
    else
    {
      this.darkModeStatus.setStatus(true);
      this.switch_status = true;
    }
   

    // this.darkModeService.toggle();
  }

}
