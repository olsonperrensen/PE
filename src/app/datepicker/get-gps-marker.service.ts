import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGpsMarkerService {

  constructor(private http:HttpClient) { }

  getGpsMarker()
  {
    const url = 'http://localhost:3000/gpsMarkers'
    return this.http.get(url)
  }
}
