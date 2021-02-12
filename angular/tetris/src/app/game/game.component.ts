import { Component, OnInit, ViewChild, HostListener, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
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
	@Input() person = {
		name: '',
		email: '',
	};

	constructor(private cd: ChangeDetectorRef) {}
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

	private sortHistory()
	{
		this.history.sort((a, b) => {
			if(this.sortedAZ)
				return a.timestamp - b.timestamp;
			else
				return b.timestamp - a.timestamp;
		});
	}

	private addGameEvent(message: String)
	{
		this.history.push({
			timestamp: Date.now(),
			message: message} );
		this.sortHistory();
	}

	incrementPoints()
	{
		this.points += 1;
	}

	onGameStart()
	{
		if(this.tetris.state == 1)
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
		this.sortHistory();
		this.cd.markForCheck();
	}
}
