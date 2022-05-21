import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }

  private lastPlacedOrder!:UserDetails;

  placeOrder(data:any):Observable<UserDetails>
{
  const url = 'http://localhost:3000/UserDetails'

  return this.http.post<UserDetails>(url,data);
  // returning an Observable
}

setLastPlacedOrder(res:UserDetails)
{
  this.lastPlacedOrder = res; 
}

getLastPlacedOrder()
{
  return this.lastPlacedOrder;
}

}
