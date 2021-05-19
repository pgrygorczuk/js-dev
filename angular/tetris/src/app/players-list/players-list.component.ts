import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { map } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit, OnDestroy
{
  public scoresSortedAZ = false;
  public scores = [];
  public updated: Date = new Date();
  public autoRefreshCheckbox = true;
  @Input() limit = 10;
  @Input() playerName = undefined;
  @Input() autoRefresh = 0;
  private _sub$: Subscription;

  constructor(private _tetrisService: PlayerService){ }

  ngOnInit(): void{
    this.loadData();
    if( this.autoRefresh > 0 ){
      this.createInterval();
    }
  }

  ngOnDestroy(): void{
    if(this._sub$){
      this._sub$.unsubscribe();
      this._sub$ = undefined;
    }
  }

  private createInterval(){
    if( !this._sub$ ){
      this._sub$ = interval(this.autoRefresh*1000).subscribe((emissions) => {
        this.loadData();
        this.updated = new Date();
        //console.log('Updated.');
      });
    }
  }

  private loadData(): void{
    this._tetrisService.getScores()
    .pipe( map( data => data
      .filter(item => !this.playerName || item.name === this.playerName)
      .slice(0, this.limit)
    ) )
    .subscribe( (data) => {
      this.scores = data;
    } );
  }

  onSortScores(): void{
    this.scoresSortedAZ = !this.scoresSortedAZ;
  }

  onRefreshCheckboxChange($event): void{
    //console.log($event);
    if( $event ){
      this.createInterval();
    }
    else{
      this.ngOnDestroy();
    }
  }

  onSortNames(): void{

  }
}
