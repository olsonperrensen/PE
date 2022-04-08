import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  sample:{name:string,id:number}[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.sample = [{name:"ni",id:1},
    {name:"ni",id:1},
    {name:"ni",id:1},
    {name:"ni",id:1},
    {name:"ni",id:1},
    {name:"ni",id:1},
                  ]
  }
  public onClick()
  {
    this.router.navigate(['/order']);
    
  }

}
