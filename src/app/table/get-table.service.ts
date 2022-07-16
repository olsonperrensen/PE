import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableRow } from './TableRow';

@Injectable({
  providedIn: 'root'
})
export class GetTableService {

  constructor(private http: HttpClient) { }

  public getTable(): Observable<TableRow[]>
  {
    const url = 'https://train-am.herokuapp.com/TableContent';
    return this.http.get<TableRow[]>(url);
  }
  public getSmallTable(): Observable<TableRow[]>
  {
    const url = 'https://train-am.herokuapp.com/SmallTableContent';
    return this.http.get<TableRow[]>(url);
  }

}
