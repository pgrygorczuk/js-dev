import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'room';
  public frameworks = {
    a: 'Angular',
    v: 'Vue.js',
    r: 'React.js',
  }
  public persons: Array<Person> = [];
  public maxAllowed = 16;
  public colorClass = 'green';
  public selectedPerson: number;

  updateColorClass()
  {
    if( this.persons.length <= 8 )
      this.colorClass = 'green';
    else if( this.persons.length <= 15 )
      this.colorClass = 'orange';
    else
      this.colorClass = 'red';
  }

  addPerson($event)
  {
    if( this.persons.length >= this.maxAllowed)
      return;
    this.persons.push($event);
    this.updateColorClass();
  }

  editPerson($event)
  {
    const index = $event.index;
    this.selectedPerson = index;
    if( 'person' in $event )
    {
      this.persons[index].name = $event['person'].name;
      this.persons[index].favouriteFramework = $event['person'].favouriteFramework;
    }
  }

  deletePerson($event)
  {
    if( $event >= 0 )
      this.persons.splice($event, 1);
    else
      this.persons = [];
    this.updateColorClass();
  }
}
