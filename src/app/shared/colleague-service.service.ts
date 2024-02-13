import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { colleagues } from './colleague';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { retry } from 'rxjs';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ColleagueServiceService {
  apiURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // get-------------------------------
  getColleagues(): Observable<colleagues> {
    return this.http.get<colleagues>(this.apiURL + '/colleagues')
      .pipe(retry(1), catchError(this.handleError));
  }

  // get by id----------------------------
  getColleague(id: any): Observable<colleagues> {
    return this.http.get<colleagues>(this.apiURL + '/colleagues/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
