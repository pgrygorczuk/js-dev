import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'tetris';
  //view = 'intro';
  view = 'game';

  onGameStart($event)
  {
    //console.log($event.name);
    //console.log($event.email);
    this.view = 'game';
  }

  onGameExit($event)
  {
    this.view = 'intro';
  }
}
