import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  //TS domysla sie typu na podstawie przypisanej wartosci domyslnej;
  title = 'my-project';
  public maxAllowed = 16;
  public counter = 0;
  public color = 'green';

  public add(event): void
  {
    if( this.counter < this.maxAllowed )
      this.counter += 1;
    this._updateColors();
  }
  public sub(event): void
  {
    if( this.counter > 0 )
      this.counter -= 1;
    this._updateColors();
  }
  private _updateColors()
  {
    const seatsLeft = this.maxAllowed - this.counter;
    if( seatsLeft > 3 )
    {
      this.color = 'green';
    }
    else if( seatsLeft > 0 )
    {
      this.color = 'orange';
    }
    else
    {
      this.color = 'red';
    }
  }
}
