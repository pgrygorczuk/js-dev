import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit
{
  public players = [];
  constructor(private _playersService: PlayersService){ }

  ngOnInit(): void
  {
    this._playersService.getPlayers().subscribe( (data) => {
      this.players = data;
    } );
  }

  onClick(): void
  {
    console.log('works');

    const newPlayer: IPlayer = {
      name: 'test',
      email: 'test@test.pl',
      best_result: 0,
      time_played: 19,
    };
    this._playersService.addPlayer( newPlayer ).subscribe( data => {
      //TODO: check if player is on a list.
      this.players.push( newPlayer );
    } );
  }
}
