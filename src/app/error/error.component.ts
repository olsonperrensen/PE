import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  page:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.page = this.router.url;
  }

}
