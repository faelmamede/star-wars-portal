import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string = "http://localhost:3000/characters";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showInfo(info: string, isError: boolean = false): void {
    this.snackBar.open(info, 'fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['info-error'] : ['msg-success']
    });
  }

  read(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  readById(id: string): Observable<Character> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Character>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  create(character: Character): Observable<Character> {
    return this.http.post<Character>(this.baseUrl, character).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err.error))
    );
  }

  delete(id: string): Observable<Character> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Character>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  errorHandler(err: any): Observable<any> {
    this.showInfo(err, true);
    console.log(err)
    return EMPTY;
  }
}
