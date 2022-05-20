import { Component, OnInit } from '@angular/core';
import *  as a from 'angular-animations';
import { DarkModeStatusService } from '../dark-mode-status.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations:[
    a.fadeInOnEnterAnimation()
  ]
})
export class FeaturesComponent implements OnInit {
  switch_status!:boolean;
  constructor(private darkModeStatus:DarkModeStatusService) { }

  ngOnInit(): void {
    this.darkModeStatus.getStatus().subscribe((status:any) =>
    {
      this.switch_status = status;

    });
  }

}
