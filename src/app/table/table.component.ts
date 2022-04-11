import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from './journey';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  user_journey!:Journey;

  constructor(private router:Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user_journey = {
      from: this.aRoute.snapshot.params['from'],
      to: this.aRoute.snapshot.params['to'],
      day: this.aRoute.snapshot.params['day'],
    }
  }
  public onClick()
  {
    this.router.navigate(['/order']);
    
  }

}
