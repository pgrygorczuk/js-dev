import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  person = {};
  title = 'tetris';
  //view = 'intro';
  view = 'game';

  onGameStart($event)
  {
    this.person = {
      name: $event.name,
      email: $event.email,
    };
    this.view = 'game';
  }

  onGameExit($event)
  {
    this.view = 'intro';
  }
}
