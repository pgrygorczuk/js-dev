import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
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

  constructor(public playerService: PlayerService, private _router: Router){
  }

  ngOnInit(): void {
  }

  onSortScores(): void{
    this.scoresSortedAZ = !this.scoresSortedAZ;
  }

}
