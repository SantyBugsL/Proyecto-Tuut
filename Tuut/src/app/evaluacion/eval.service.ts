import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Eva } from './eva';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  private apiURL = "http://localhost:8000/api/preguntas/";


  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Eva[]> {
   return this.httpClient.get<Eva[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(eva): Observable<Eva> {
   return this.httpClient.post<Eva>(this.apiURL, JSON.stringify(eva), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Eva> {
   return this.httpClient.get<Eva>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, eva): Observable<Eva> {
   return this.httpClient.put<Eva>(this.apiURL + id, JSON.stringify(eva), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Eva>(this.apiURL + id, this.httpOptions)
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
