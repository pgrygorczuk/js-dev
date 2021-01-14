import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-persons-form',
  templateUrl: './persons-form.component.html',
  styleUrls: ['./persons-form.component.css']
})
export class PersonsFormComponent implements OnInit, OnChanges
{
  public name = '';
  public favouriteFramework = 'a';
  public index = -1;
  public isUpdateButtonHidden = true;

  @Input() persons: Array<Person>;
  @Input() frameworks: Object;
  @Input() editEvent: Event;
  @Output() addPersonEvent = new EventEmitter<Person>();
  @Output() editPersonEvent = new EventEmitter<Object>();

  constructor(){ }
  ngOnInit(): void { }
  ngOnChanges(){ }

  @Input()
  get selectedPerson(): number{
    return this.index;
  }
  set selectedPerson(index: number)
  {
    if( index > -1 )
    {
      this.index = index;
      this.name = this.persons[index].name;
      this.favouriteFramework = this.persons[index].favouriteFramework;
      this.isUpdateButtonHidden = false;
    }
  }

  add()
  {
    this.addPersonEvent.emit({
      name: this.name,
      favouriteFramework: this.favouriteFramework,
    });
  }

  addRandom()
  {
    const randName = [ 'Adam', 'Bolesław', 'Cyprian', 'Dariusz', 'Edward', 'Felicjan' ],
    randFamilyName = [ 'Kowalski', 'Nowak', 'Kwiatkowski', 'Wiśniewski', 'Kamiński' ];
    const n = randName[Math.floor((Math.random()*randName.length))] + ' ' +
              randFamilyName[Math.floor((Math.random()*randFamilyName.length))];
    this.addPersonEvent.emit({
      name: n,
      favouriteFramework: this.favouriteFramework,
    });
  }

  save()
  {
    this.editPersonEvent.emit({
      index: this.index,
      person: {
        name: this.name,
        favouriteFramework: this.favouriteFramework,
      },
    });
    // Clear form
    this.isUpdateButtonHidden = true;
    this.name = '';
  }
}
