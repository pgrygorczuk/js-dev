import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TetrisService } from '../tetris.service';
import { Score } from '../models/score';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  public scoresSortedAZ = false;
  public allScores: Score[] = [];
  public myScores: Score[] = [];
  private _sub$: Subscription;

  constructor(public tetrisService: TetrisService, private _router: Router){

    // this._sub$ = interval(1000).subscribe((emissions) => {
    //   console.log(emissions);
    // });

  }

  ngOnInit(): void {

    if(!this.tetrisService.score.name)
			this._router.navigate(['/intro']);

    //this.tetrisService.getScores().subscribe()

    // this.tetrisService.getScores().subscribe(data => {
    //   if(!data) return;
    //   this.allScores = data;
    //   this.allScores.forEach( (value, index) => {
    //     if(value.name === this.tetrisService.score.name){
    //       this.myScores.push(value);
    //     }
    //   });
    // });

    // console.log(this.myScores);
  }

  onSortScores(): void{
    this.scoresSortedAZ = !this.scoresSortedAZ;
  }

}
