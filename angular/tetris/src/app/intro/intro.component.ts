import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPlayer } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit
{
  @Output() startEvent = new EventEmitter();
  private _player: IPlayer;

  constructor(private _playersService: PlayersService, private _router: Router) { }
  ngOnInit(): void {
  }

  start(form: FormGroup)
  {
    const newPlayer: IPlayer = {
        name: form.value.name,
        email: form.value.email,
        best_result: 0,
        time_played: 0,
      };

    if( form.valid )
    {
      this._playersService.addPlayer(newPlayer).subscribe(player => {
        this._player = player;
        //this.startEvent.emit({player: this.player});
        this._playersService.savePlayer(this._player);
        this._router.navigate(['/game']);
      });
    }
  }
}
