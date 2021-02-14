import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { IntroComponent } from './intro/intro.component';
import { EventsFilterPipe } from './events-filter.pipe';
import { TimerComponent } from './timer/timer.component';
import { EventsSortPipe } from './events-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent,
    EventsFilterPipe,
    TimerComponent,
    EventsSortPipe,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
