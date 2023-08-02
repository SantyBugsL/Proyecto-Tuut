import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pra } from './pra';

@Injectable({
  providedIn: 'root'
})
export class PratService {

  private apiURL = "http://localhost:8000/api/preguntas/";


  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pra[]> {
   return this.httpClient.get<Pra[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(pra): Observable<Pra> {
   return this.httpClient.post<Pra>(this.apiURL, JSON.stringify(pra), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Pra> {
   return this.httpClient.get<Pra>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, pra): Observable<Pra> {
   return this.httpClient.put<Pra>(this.apiURL + id, JSON.stringify(pra), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Pra>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

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
