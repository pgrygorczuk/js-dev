import { Component, OnInit, OnChanges, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  //@ViewChild ('name') nameInput: ElementRef;

  constructor(){}

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
      this.name.value = this.persons[index].name;
      this.favouriteFramework = this.persons[index].favouriteFramework;
      this.isUpdateButtonHidden = false;
    }
  }

  private _validate(name, framework): boolean{
    return true;
  }

  add(form: FormGroup)
  {
    const name_ = form.value.name;
    const framework_ = form.value.framework;

    if( this. _validate(name_, framework_))
    {
      this.addPersonEvent.emit({
        name: name_,
        favouriteFramework: framework_,
      });
    }
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
