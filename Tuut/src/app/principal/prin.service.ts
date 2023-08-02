import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Prin } from './prin';

@Injectable({
  providedIn: 'root'
})
export class PrinService {

  private apiURL = "http://localhost:8000/api/preguntas/";


  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Prin[]> {
   return this.httpClient.get<Prin[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(prin): Observable<Prin> {
   return this.httpClient.post<Prin>(this.apiURL, JSON.stringify(prin), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Prin> {
   return this.httpClient.get<Prin>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, prin): Observable<Prin> {
   return this.httpClient.put<Prin>(this.apiURL + id, JSON.stringify(prin), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Prin>(this.apiURL + id, this.httpOptions)
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
