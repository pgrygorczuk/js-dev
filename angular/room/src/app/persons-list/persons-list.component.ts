import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit
{
  @Input() persons: Array<Person>;
  @Input() frameworks: Object;
  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  public framework = 'all';

  constructor() { }
  ngOnInit(): void { }

  clear()
  {
    this.deleteEvent.emit();
  }

  delete(index: Number)
  {
    this.deleteEvent.emit(index);
  }

  edit(index: Number)
  {
    this.editEvent.emit({index});
  }
}
