import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, AfterViewInit {
  page:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.page = document.referrer.split('/')[3];
    console.log(this.page);
  }
}
