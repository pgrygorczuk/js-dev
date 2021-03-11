import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService
{
  private url = "https://studia.docs.iqhs.pl/players.php";
  private player: IPlayer;
  constructor(private http: HttpClient) { }

  savePlayer(player: IPlayer)
  {
    this.player = player;
  }

  loadPlayer(): IPlayer
  {
    return this.player;
  }

  getPlayers(): Observable<IPlayer[]>
  {
    return this.http.get<IPlayer[]>( this.url );
  }

  getPlayer(email): Observable<IPlayer>
  {
    return this.http.get<IPlayer>( this.url + '?email=' + email );
  }

  // Adds player or updates if exists.
  addPlayer(player: IPlayer): Observable<IPlayer>
  {
    return this.http.post<IPlayer>( this.url, player );
  }
}
