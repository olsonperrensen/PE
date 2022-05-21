import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckEmailService {

  private url = ''

  public setDomainnCheck(user_domain:string)
  {
    if(user_domain === '' || !(user_domain.indexOf('.')!==-1) || user_domain.length < 3)
    {
      alert("Service: You can't place an order with a fake email address.")
    }
    this.url = 'https://open.kickbox.com/v1/disposable/';
    this.url += user_domain;
    return this.checkEmail();
  }

  private checkEmail()
  {
    console.log(`from email-Service: ${this.url}`)
    return this.http.get(this.url);
  }

  constructor(private http:HttpClient) { }
}
