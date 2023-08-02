import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Wri } from './wri';

@Injectable({
  providedIn: 'root'
})
export class WritService {

  private apiURL = "http://localhost:8000/api/preguntas/";


  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Wri[]> {
   return this.httpClient.get<Wri[]>(this.apiURL).pipe(catchError(this.errorHandler))}

 create(wri): Observable<Wri> {
   return this.httpClient.post<Wri>(this.apiURL, JSON.stringify(wri), this.httpOptions)
   .pipe(catchError(this.errorHandler))}

 find(id): Observable<Wri> {
   return this.httpClient.get<Wri>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, wri): Observable<Wri> {
   return this.httpClient.put<Wri>(this.apiURL + id, JSON.stringify(wri), this.httpOptions)
   .pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<Wri>(this.apiURL + id, this.httpOptions)
   .pipe(catchError(this.errorHandler)) }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }
}
