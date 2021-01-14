import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit
{
  //Remember to import FormsModule in app.module.ts for ngModel.

  public name = '';
  @Input() testvar: string;
  @Output() nameEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void { }

  sendName()
  {
    this.nameEvent.emit( this.name );
  }
}
