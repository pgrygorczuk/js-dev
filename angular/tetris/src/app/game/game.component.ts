import { Component, OnInit, ViewChild, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
	points = 0;
	time = 0;
	log = '';
	history = [];

	@ViewChild('game') tetris: TetrisCoreComponent;
	@Output() exitEvent = new EventEmitter();

	constructor() { }
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

		console.log(this.tetris);
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
			this.history.push({
				timestamp: Date.now(),
				message: 'Game stopped.'} );
		}
		else
		{
			this.tetris.actionStart();
			this.history.push({
				timestamp: Date.now(),
				message: 'Game started.'} );
		}
	}

	onLineCleared(){
		this.incrementPoints();
		this.history.push({
			timestamp: Date.now(),
			message: 'Line cleared.'} );
	}

	onGameOver(){
		this.history.push({
			timestamp: Date.now(),
			message: 'Game over.'} );
	}

	onGameExit(){
		this.history.push({
			timestamp: Date.now(),
			message: 'Game exitted.'} );
		this.exitEvent.emit();
	}
}
