import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as a from 'angular-animations';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
@Component({
  selector: 'app-traintype',
  templateUrl: './traintype.component.html',
  styleUrls: ['./traintype.component.css'],
  animations:[
    a.fadeInOnEnterAnimation(),
    a.slideInDownOnEnterAnimation(),
    a.flipOutXAnimation()
  ]
})
export class TraintypeComponent implements OnInit {
  animStateA:boolean=false;
  animStateB:boolean=false;
  animStateC:boolean=false;
  isFetching:boolean=true;
  constructor(private router:Router, private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isFetching = false;
    }, 300);
    this.progressBar.setProgressBar('step2');
  }

  onClick(opt:HTMLButtonElement)
  {
    if(opt.textContent === 'SE50')
    {
      this.animStateA = true;
    }
    if(opt.textContent === 'SE70')
    {
      this.animStateB = true;
    }
    if(opt.textContent === 'SE80')
    {
      this.animStateC = true;
    }
    setTimeout(() => {
      this.router.navigate(['/table']);
      this.progressBar.setProgressBar('step3');
    }, 500);
  }
}
