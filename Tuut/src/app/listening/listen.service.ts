import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListenService {

  private apiURL = "http://localhost:8000/api/preguntas_listening/";


  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<List[]> {
   return this.httpClient.get<List[]>(this.apiURL).pipe(catchError(this.errorHandler))}

 create(list): Observable<List> {
   return this.httpClient.post<List>(this.apiURL, JSON.stringify(list), this.httpOptions)
   .pipe(catchError(this.errorHandler))}

 find(id): Observable<List> {
   return this.httpClient.get<List>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, list): Observable<List> {
   return this.httpClient.put<List>(this.apiURL + id, JSON.stringify(list), this.httpOptions)
   .pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<List>(this.apiURL + id, this.httpOptions)
   .pipe(catchError(this.errorHandler))}

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
