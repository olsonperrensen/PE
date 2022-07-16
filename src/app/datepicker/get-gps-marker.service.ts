import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGpsMarkerService {

  constructor(private http:HttpClient) { }

  getGpsMarker()
  {
    const url = 'https://train-am.herokuapp.com/gpsMarkers'
    return this.http.get(url)
  }
}
