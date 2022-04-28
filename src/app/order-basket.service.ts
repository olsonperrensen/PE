import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderBasketService {
  private basket_items = 0;
  private basket_sum = 0;
  constructor() { }

  getBasketSum()
  {
    return this.basket_sum;
  }
  getBasketItems()
  {
    return this.basket_items;
  }
  setBasketSum(sum:number)
  {
    this.basket_sum = sum;
  }
  setBasketItems(num:number)
  {
    this.basket_items = num;
  }
}
