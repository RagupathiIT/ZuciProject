import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Month } from './month';
@Injectable({
  providedIn: 'root',
})
export class MonthService {
  private apiUrl = 'http://localhost:3002/month';
 
  constructor(private http: HttpClient) {}
 
  getMonth(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
 