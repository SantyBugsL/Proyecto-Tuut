import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Spea } from './spea';

@Injectable({
  providedIn: 'root'
})
export class SpeakService {

  private apiURL = "http://localhost:8000/api/preguntas_speaking/";


  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Spea[]> {
   return this.httpClient.get<Spea[]>(this.apiURL).pipe(catchError(this.errorHandler))}

 create(spea): Observable<Spea> {
   return this.httpClient.post<Spea>(this.apiURL, JSON.stringify(spea), this.httpOptions).pipe(catchError(this.errorHandler))}

 find(id): Observable<Spea> {
   return this.httpClient.get<Spea>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, spea): Observable<Spea> {
   return this.httpClient.put<Spea>(this.apiURL + id, JSON.stringify(spea), this.httpOptions).pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<Spea>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler))}

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
