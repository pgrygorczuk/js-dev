import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'my-project';
  public persons: Array<Person> = [];
  public name = '';
  public maxNumber = 16;
  public colorClass = 'green';
  public prefs = {
    'angular': 'Angular',
    'react': 'React.js',
    'vue': 'Vue.js',
  };
  public preferredLang = 'angular';

  public onAdd()
  {
    if( this.persons.length >= this.maxNumber || this.name == '' )
      return false;
    this.persons.push( {name: this.name, preferredLang: this.preferredLang} );
    this.name = '';
    this.updateClass();
  }

  public onAddRandom()
  {
    if( this.persons.length >= this.maxNumber )
      return false;
    const randName = [ 'Adam', 'Bolesław', 'Cyprian', 'Dariusz', 'Edward', 'Felicjan' ];
    const randFamilyName = [ 'Kowalski', 'Nowak', 'Kwiatkowski', 'Wiśniewski', 'Kamiński', 'Woźniak' ];
    const r = randName[Math.floor((Math.random()*randName.length))] + ' ' +
              randFamilyName[Math.floor((Math.random()*randFamilyName.length))];
    this.persons.push( {name: r, preferredLang: this.preferredLang} );
    this.updateClass();
  }

  public updateClass()
  {
    this.colorClass = 'green';
    if( this.persons.length > 8 )
      this.colorClass = 'orange';
    if( this. persons.length > 15 )
      this.colorClass = 'red';
  }

  public onClear()
  {
    this.persons = [];
    this.updateClass();
  }

  public onClearPerson(person)
  {
    const index = this.persons.indexOf(person);
    this.persons.splice( index, 1 );
    this.updateClass();
  }

  public onChangePref(person)
  {
    person.preferredLang = this.preferredLang;
  }
}
