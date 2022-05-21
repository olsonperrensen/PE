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
    const url = 'http://localhost:3000/TableContent';
    return this.http.get<TableRow[]>(url);
  }
  public getSmallTable(): Observable<TableRow[]>
  {
    const url = 'http://localhost:3000/SmallTableContent';
    return this.http.get<TableRow[]>(url);
  }

}
