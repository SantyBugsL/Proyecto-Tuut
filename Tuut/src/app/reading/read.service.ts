import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Rea } from './rea';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private apiURL = "http://localhost:8000/api/preguntas_reading/";


  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Rea[]> {
    return this.httpClient.get<Rea[]>(this.apiURL).pipe(catchError(this.errorHandler))}

 create(rea): Observable<Rea> {
   return this.httpClient.post<Rea>(this.apiURL, JSON.stringify(rea), this.httpOptions).pipe(catchError(this.errorHandler))}

 find(id): Observable<Rea> {
  return this.httpClient.get<Rea>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, rea): Observable<Rea> {
   return this.httpClient.put<Rea>(this.apiURL + id, JSON.stringify(rea), this.httpOptions).pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<Rea>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler))}

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
