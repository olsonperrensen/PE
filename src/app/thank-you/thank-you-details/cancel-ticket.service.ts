import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancelTicketService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/UserDetails/'

  cancelTicket(id:number)
  { 
   return this.http.delete(`${this.url}${id}`);
  }

}
