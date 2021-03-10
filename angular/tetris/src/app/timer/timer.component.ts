import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit
{
  private interval;
  public time: number = 0;
  public display: string = "00:00:00";

  constructor(private ref: ChangeDetectorRef)
  {
    //ref.detach();
    //this.ref.detach();
    // setInterval( ()=>{
    //   this.ref.detectChanges();
    // }, 1000 );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.stop();
  }

  private update()
  {
    this.time += 1;
    const
      seconds = this.time % 60,
      minutes = Math.floor(this.time / 60) % 60,
      hours = Math.floor(this.time / 3600);
    this.display = "";
    if(hours < 10) this.display += "0";
    this.display += hours + ":";
    if(minutes < 10) this.display += "0";
    this.display += minutes + ":";
    if(seconds < 10) this.display += "0";
    this.display += seconds;
  }

  public setTime(time: number): void
  {
    this.time = time;
  }

  public getTime(): number
  {
    return this.time;
  }

  public start()
  {
    this.interval = setInterval(this.update.bind(this), 1000);
  }

  public stop()
  {
    clearInterval(this.interval);
  }
}
