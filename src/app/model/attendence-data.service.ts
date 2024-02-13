import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from './attendance.model';
 
@Injectable({
  providedIn: 'root'
})
export class AttendenceDataService {
  private apiUrl = 'http://localhost:3001';
 
  constructor(private http: HttpClient) {}
  addAttendance(attendanceData: Attendance): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/attendance`, attendanceData);
  }
}