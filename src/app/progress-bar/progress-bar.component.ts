import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {

  @ViewChild('progressValue') progressValue!:ElementRef;

  constructor(private R2:Renderer2,private progressBar:ProgressBarService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.R2.addClass(this.progressValue.nativeElement,this.progressBar.getProgressBar());
    }, 1000);
  }
}
