import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Vocab } from './vocab';

@Injectable({
  providedIn: 'root'
})
export class VocabuService {

  private apiURL = "http://localhost:8000/api/preguntas_vocabulary/";


  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Vocab[]> {
   return this.httpClient.get<Vocab[]>(this.apiURL).pipe(catchError(this.errorHandler))}

 create(vocab): Observable<Vocab> {
   return this.httpClient.post<Vocab>(this.apiURL, JSON.stringify(vocab), this.httpOptions).pipe(catchError(this.errorHandler))}

 find(id): Observable<Vocab> {
   return this.httpClient.get<Vocab>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, vocab): Observable<Vocab> {
   return this.httpClient.put<Vocab>(this.apiURL + id, JSON.stringify(vocab), this.httpOptions).pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<Vocab>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler))}

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
