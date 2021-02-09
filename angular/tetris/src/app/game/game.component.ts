import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
  constructor() { }
  ngOnInit(): void {}

  // @ViewChild(TetrisCoreComponent)
  //   private _tetris: TetrisCoreComponent;
 
  //   public onRotateButtonPressed() {
  //       this._tetris.actionRotate();
  //   }

}
