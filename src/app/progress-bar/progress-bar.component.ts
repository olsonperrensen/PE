import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {

  @ViewChild('progressValue') progressValue!:ElementRef;
  switch_status!:boolean;

  constructor(private R2:Renderer2,private progressBar:ProgressBarService,
    private darkModeStatus:DarkModeStatusService) { }

  ngOnInit(): void {
    this.switch_status = this.darkModeStatus.getStatus();
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.R2.addClass(this.progressValue.nativeElement,this.progressBar.getProgressBar());
    }, 1000);
  }
}
