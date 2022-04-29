import { Injectable } from '@angular/core';
import * as seedrandom from 'seedrandom';
@Injectable({
  providedIn: 'root'
})
export class FakeTrainsService {
  private cities = require("../../../assets/cities.json");

  private tmp_cities = ['',''];
  
  
  public getCities()
  {
    console.log(Math.round(seedrandom()()*171));
    this.tmp_cities[0] = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    this.tmp_cities[1] = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    return this.tmp_cities;
  }
  constructor() { }
}
