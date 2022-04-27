import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { DarkModeStatusService } from '../dark-mode-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('switch') switch:any;

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
 
  constructor(private darkModeService: DarkModeService,private darkModeStatus:DarkModeStatusService) {}
 
  onToggle(): void {
    this.darkModeService.toggle();
    this.darkModeStatus.setStatus(this.switch.value);
  }

  ngOnInit(): void {
  }

}
