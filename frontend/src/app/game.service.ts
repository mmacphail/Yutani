import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from './location';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private gameUrl = '/v1/games/1'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getLocations$(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.gameUrl}/locations`)
      .pipe(
          catchError(this.handleError<Location[]>('getLocations', []))
      );
  }

  getCurrentPlayer$(): Observable<Player> {
    return this.http.get<Player>(`${this.gameUrl}/current/player`)
      .pipe(
          catchError(this.handleError<Player>('getCurrentPlayer'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
