import { Injectable } from '@angular/core';
import { Ticket } from './table/ticket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket:Ticket[] = [];

  constructor() { }

  getBasket()
  {
    return this.basket;
  }
  addToBasket(user_ticket:Ticket)
  {
    const new_ticket = {
      name: user_ticket.name,
      code: user_ticket.code,
      price: user_ticket.price
    }
    this.basket.push(new_ticket);
    console.log(this.basket);
  }
  removeFromBasket(user_ticket:Ticket)
  {
    this.basket.pop();
    console.log(this.basket);
  }

}
