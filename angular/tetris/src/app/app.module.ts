import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { EventsFilterPipe } from './events-filter.pipe';
import { TimerComponent } from './timer/timer.component';
import { EventsSortPipe } from './events-sort.pipe';
import { PlayersListComponent } from './players-list/players-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PlayerService } from './player.service';
import { PlayerDataGuard } from './player-data-guard.service';

@NgModule({
  declarations: [ // Remember to add here your components !
    AppComponent,
    GameComponent,
    IntroComponent,
    TimerComponent,
    ScoresComponent,
    PlayersListComponent,
    EventsFilterPipe,
    EventsSortPipe,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      {
        path: 'game',
        component: GameComponent,
        canActivate: [PlayerDataGuard],
      },
      {
        path: 'game/:colors',
        component: GameComponent,
        canActivate: [PlayerDataGuard],
      },
      {
        path: 'scores',
        component: ScoresComponent,
        canActivate: [PlayerDataGuard],
      },
      { path: '', redirectTo: '/intro', pathMatch: 'full' },
      { path: '**', redirectTo: '/intro' },
    ]),
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
