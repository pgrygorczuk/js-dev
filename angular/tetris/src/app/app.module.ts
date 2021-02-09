import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
