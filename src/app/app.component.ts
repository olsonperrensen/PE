import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  action:string = "";
  setTableView(uaction:string)
  {
    this.action = uaction;
  }
}
