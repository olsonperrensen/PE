import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as a from 'angular-animations';
import { DarkModeStatusService } from '../dark-mode-status.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:[
    a.fadeInOnEnterAnimation()
  ]
})
export class FooterComponent implements OnInit {

  switch_status:boolean=false;
  lang_ts = '';

  constructor(private darkModeStatus:DarkModeStatusService, private translateService:TranslateService) { }
  
  isLinkMouseOver:boolean = false;
  isGNUMouseOver:boolean = false;
  onLinkMouseOver()
  {
    this.isLinkMouseOver = true;
    setTimeout(() => {
      this.isLinkMouseOver = false;  
    }, 2800);
  }
  onGNUMouseOver()
  {
    this.isGNUMouseOver = true;
    setTimeout(() => {
      this.isGNUMouseOver = false;  
    }, 2800);
  }
  ngOnInit(): void {
    this.switch_status = this.darkModeStatus.getStatus();
    this.lang_ts = localStorage.getItem('lang') || 'en';
  }

  public selectLanguage(event:any)
  {
    this.translateService.use(event.target.value);
  }


    changeLang(lang:any)
    {
      localStorage.setItem('lang',lang);
      window.location.reload();
    }
}
