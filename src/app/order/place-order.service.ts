import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }

  placeOrder(data:any):Observable<UserDetails>
{
  const url = 'https://localhost:3000/UserDetails'
  return this.http.post<UserDetails>(url,data);
}
}
