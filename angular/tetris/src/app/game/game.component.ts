import { Component, OnInit, ViewChild, HostListener, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameState, TetrisCoreComponent } from 'ngx-tetris';
import { TetrisService } from '../tetris.service';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
	sortedAZ = true;
	score = 3;
	history = [];
	showGameEvents = 'all';
	gameStatus = 'The game is ready. Press SPACEBAR to start.';
	colorPalette = undefined;

	@ViewChild('game') tetris: TetrisCoreComponent;
	@ViewChild('timer') timer: TimerComponent;
	@Output() exitEvent = new EventEmitter();

	constructor(
		public tetrisService: TetrisService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute ) {
			this.colorPalette = this._activatedRoute.snapshot.params.colors;
		}
	
	ngOnInit(): void
	{
		// This functionality has been replaced with PlayerDataGuard.
		// if(!this.tetrisService.score.name)
		// 	this._router.navigate(['/intro']);
	}

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
	}

	private addGameEvent(message: string)
	{
		this.history.push({
			timestamp: Date.now(),
			message: message} );
		this.updatePlayer(message);
	}

	private incrementPoints()
	{
		this.score += 1;
	}

	private updatePlayer(message: string)
	{
		// this.player.time_played = Number(this.player.time_played) + this.timer.getTime();
		// this._playersService.addPlayer(this.player).subscribe(player => {
		// 	this.player = player;
		// });
		if( ['Game restarted.', 'Game over.', 'Game exitted.'].includes(message) ){
			if( this.tetrisService.updateScore(this.score) ){
				// this.tetrisService.saveScore().subscribe(data => {
				// 	console.log(data);
				// });
				this.tetrisService.saveScore().subscribe({ // observer
					next:	(data) => console.log('Got value: ' + data),
					error:	(err) => console.error('Error:' + err),
					complete: () => console.log('Finished.'),
				});
			}
		}
	}

	onColorChange(){
		this._router.navigate(['/game/'+this.colorPalette]);
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
        this._router.navigate(['/intro']);
	}

	onSortEvents(){
		this.sortedAZ = !this.sortedAZ;
	}
}
