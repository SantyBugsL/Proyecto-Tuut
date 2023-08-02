import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Gra } from './gra';

@Injectable({
  providedIn: 'root'
})
export class GramService {

  private apiURL = "http://localhost:8000/api/preguntas_grammar/";


  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Gra[]> {
   return this.httpClient.get<Gra[]>(this.apiURL).pipe(catchError(this.errorHandler) ) }

 create(gra): Observable<Gra> {
    return this.httpClient.post<Gra>(this.apiURL, JSON.stringify(gra), this.httpOptions)
   .pipe(catchError(this.errorHandler) )}

 find(id): Observable<Gra> {
   return this.httpClient.get<Gra>(this.apiURL + id).pipe(catchError(this.errorHandler))}

 update(id, gra): Observable<Gra> {
   return this.httpClient.put<Gra>(this.apiURL + id, JSON.stringify(gra), this.httpOptions)
   .pipe(catchError(this.errorHandler))}

 delete(id){
   return this.httpClient.delete<Gra>(this.apiURL + id, this.httpOptions).pipe(
    catchError(this.errorHandler))}

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
