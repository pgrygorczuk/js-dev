import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthTokenResponse } from './models/auth-token-response';
import { Score } from './models/score';
import { AuthTokenRequest } from './models/auth-token-request';

@Injectable({
  providedIn: 'root'
})
export class TetrisService {

  private url = 'http://tetris.chrum.it/';
  private headers = new HttpHeaders({
    'Accept': 'application/json',
  });
  private token: string;
  public score: Score = {
    name: 'P.G.', // REMOVE ON PROD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    score: 0,
  };

  // http://tetris.chrum.it/docs/#/
  constructor(private http: HttpClient){
    //this.headers.append('Accept', 'application/json'); // Wrong !
  }

  updateScore(_score: number): boolean{
    if(_score > this.score.score){
      this.score.score = _score;
      return true;
    }
    return false;
  }

  checkToken(token: string): Observable<AuthTokenResponse>{
    this.token = token;
    const request: AuthTokenRequest = {
      "auth-token": token,
    };
    return this.http.post<AuthTokenResponse>( this.url+'check-token', request );
  }

  getScores(): Observable<Score[]>{
    return this.http.get<Score[]>( this.url+'scores', {
      headers: this.headers
    } );
  }

  saveScore(): Observable<Score[]>{
    let headers = this.headers;
    headers.append('auth-token', this.token);
    return this.http.post<Score[]>( this.url+'scores', this.score, {
      headers: headers
    } );
  }
}
