import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthTokenResponse } from './models/auth-token-response';
import { Score } from './models/score';
import { AuthTokenRequest } from './models/auth-token-request';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url = 'https://tetris.chrum.it/';
  private headers = new HttpHeaders({
    'Accept': 'application/json',
  });
  private token: string;
  public colorPalette = 'normal';
  public score: Score = {
    name: '',
    score: 0,
  };

  // http://tetris.chrum.it/docs/#/
  // http://tetris.chrum.it/docs/swagger.json
  constructor(private http: HttpClient){
    this.loadFromLS();
    //console.log(this.score.name);
  }

  saveToLS(){
    const data = {
      score: this.score,
      color: this.colorPalette,
      //token: this.token,
    };
    localStorage.setItem('tetris', JSON.stringify(data));
  }

  loadFromLS(){
    let data = localStorage.getItem('tetris');
    if(data){
      data = JSON.parse(data);
      this.colorPalette = data['color'];
      this.score = data['score'];
      //this.token = data['token'];
      return data;
    }
    else{
      return false;
    }
  }

  clearLS(){
    localStorage.removeItem('tetris');
    this.score.name = '';
  }

  isPlayerSet(){
    return Boolean(this.score.name);
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
