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
  public name: string = '';
  public familyName: string = '';
  public sayHello()
  {
    alert( 'Hello ' + this.name + ' ' + this.familyName );
  }
  public sayBye()
  {
    alert( 'Bye ' + this.name + ' ' + this.familyName );
    this.name = '';
    this.familyName = '';
  }
}
