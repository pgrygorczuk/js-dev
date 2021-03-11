import { Component } from '@angular/core';
import { IPlayer } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  private player = {};
  private title = 'Tetris game';
  //public view = 'intro';
  //view = 'game';

  onGameStart($event)
  {
    this.player = $event.player;
    //this.view = 'game';
  }

  onGameExit($event)
  {
    //this.view = 'intro';
  }
}
