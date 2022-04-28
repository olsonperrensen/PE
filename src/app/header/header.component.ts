import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { DarkModeStatusService } from '../dark-mode-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  ngAfterViewInit(): void {
    console.log(this.switch.value)
  }

  @ViewChild('switch') switch!:HTMLInputElement;
  switch_status!:boolean;

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
 
  constructor(private darkModeService: DarkModeService,
    private darkModeStatus:DarkModeStatusService, private R2:Renderer2) {}
 
  onToggle(): void {
    this.darkModeService.toggle();
    this.darkModeStatus.setStatus(Boolean(this.switch.value));
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
