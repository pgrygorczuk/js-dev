import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'my-project';
  public persons: Array<string> = [];
  public name = '';
  public onAdd()
  {
    this.persons.push( this.name );
    this.name = '';
  }
  public onClear(event)
  {
    this.persons = [];
  }
  public onClearPerson(person)
  {
    const index = this.persons.indexOf(person);
    this.persons.splice( index, 1 );
  }
}
