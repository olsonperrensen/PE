import { Injectable } from '@angular/core';
import * as seedrandom from 'seedrandom';
import { Cities } from './cities';
@Injectable({
  providedIn: 'root'
})
export class FakeTrainsService {
  private cities = require("../../../assets/cities.json");

  // private tmp_cities = ['',''];
  
  
  public getCities(tmp_cities:Cities)
  {

    let city1 = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    let city2 = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    // tmp_cities.first_city = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    // tmp_cities.second_city = this.cities['ArrayOfDMGa']['DMGa'][Math.round(seedrandom()()*171)]['TenGa'];
    // const array_of_cities = new Cities();
    tmp_cities = new Cities();
    tmp_cities.first_city = city1;
    tmp_cities.second_city = city2;
    
    // array_of_cities.first_city = tmp_cities.first_city;
    // array_of_cities.second_city = tmp_cities.second_city;
    return tmp_cities;
  }
  constructor() { }
}
