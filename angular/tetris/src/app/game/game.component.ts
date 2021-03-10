import { Component, OnInit, ViewChild, HostListener, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { GameState, TetrisCoreComponent } from 'ngx-tetris';
import { IPlayer } from '../player';
import { PlayersService } from '../players.service';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
	points = 0;
	history = [];
	sortedAZ = true;
	showGameEvents = 'all';
	gameStatus = 'The game is ready. Press SPACEBAR to start.';

	@ViewChild('game') tetris: TetrisCoreComponent;
	@ViewChild('timer') timer: TimerComponent;
	@Output() exitEvent = new EventEmitter();
	@Input() player: IPlayer = {
		name: '',
		email: '',
		time_played: 0,
		best_result: 0,
	};

	constructor(private playersService: PlayersService) {}
	ngOnInit(): void {}

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent): void
	{
		if(event.key == 'ArrowRight'){
			this.tetris.actionRight();
		}
		else if(event.key == 'ArrowLeft'){
			this.tetris.actionLeft();
		}
		else if(event.key == 'ArrowUp'){
			this.tetris.actionRotate();
		}
		else if(event.key == 'ArrowDown'){
			this.tetris.actionDown();
		}
		else if(event.key == ' ')
		{
			this.onGameStart();
		}

		// console.log(this.tetris);
	}

	private addGameEvent(message: String)
	{
		this.history.push({
			timestamp: Date.now(),
			message: message} );
		this.updatePlayer();
	}

	private incrementPoints()
	{
		this.points += 1;
		if( this.points > this.player.best_result )
			this.player.best_result = this.points;
	}

	private updatePlayer()
	{
		this.player.time_played = this.timer.getTime();
		this.playersService.addPlayer(this.player).subscribe(player => {
			this.player = player;
		});
	}

	onGameStart()
	{
		if(this.tetris.state == GameState.Started)
		{
			this.tetris.actionStop();
			this.timer.stop();
			this.addGameEvent('Game stopped.');
			this.gameStatus = 'Game paused. Press SPACEBAR to resume.';
		}
		else
		{
			this.tetris.actionStart();
			this.timer.start();
			this.addGameEvent('Game started.');
			this.gameStatus = 'Game is running...';
		}
	}

	onLineCleared(){
		this.incrementPoints();
		this.addGameEvent('Line cleared.');
	}

	onGameReset(){
		this.tetris.actionReset();
		this.addGameEvent('Game restarted.');
	}

	onGameOver(){
		this.addGameEvent('Game over.');
		this.gameStatus = 'Game over. Press RESTART button to play again.';
		this.timer.stop();
	}

	onGameExit(){
		this.addGameEvent('Game exitted.');
		this.tetris.actionStop();
		this.timer.stop();
		this.exitEvent.emit();
	}

	onSortEvents(){
		this.sortedAZ = !this.sortedAZ;
	}
}
