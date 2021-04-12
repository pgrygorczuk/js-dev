import { Component, OnInit } from '@angular/core';
import { TetrisService } from '../tetris.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit
{
  public scoresSortedAZ = false;
  public scores = [];
  constructor(private _tetrisService: TetrisService){ }

  ngOnInit(): void
  {
    this._tetrisService.getScores().subscribe( (data) => {
      this.scores = data;
    } );
  }

  onSortScores(): void{
    this.scoresSortedAZ = !this.scoresSortedAZ;
  }

  onSortNames(): void{

  }

  onClick(): void
  {
    // console.log('works');

    // const newPlayer: IPlayer = {
    //   name: 'test',
    //   email: 'test@test.pl',
    //   best_result: 0,
    //   time_played: 19,
    // };
    // this._playersService.addPlayer( newPlayer ).subscribe( data => {
    //   //TODO: check if player is on a list.
    //   this.players.push( newPlayer );
    // } );
  }
}
