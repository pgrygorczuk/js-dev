import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TetrisService {

  private url = 'http://tetris.chrum.it/';
  private headers = new HttpHeaders();
  private token: string;

  constructor(private http: HttpClient){
    this.headers.append('accept', 'application/json');
  }

  checkToken(token: string): Observable<Object>{
    this.token = token;
    return this.http.post<Object[]>( this.url+'check-token', token );
  }

  getScores(): Observable<Object>{
    return this.http.get<Object[]>( this.url+'scores', {
      headers: this.headers
    } );
  }

  saveScore(score: Object): Observable<Object>{
    let headers = this.headers;
    headers.append('auth-token', this.token);
    return this.http.post<Object[]>( this.url+'scores', score, {
      headers: headers
    } );
  }
}
