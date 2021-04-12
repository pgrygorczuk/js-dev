import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Score } from '../models/score';
import { TetrisService } from '../tetris.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit
{
  @Output() startEvent = new EventEmitter();
  @ViewChild('personForm') personForm: NgForm;

  constructor(private _tetrisService: TetrisService, private _router: Router) { }
  ngOnInit(): void {
  }

  start(form: FormGroup)
  {
    const token = form.value.token;
    const score: Score = {
      name: form.value.name,
      score: 0,
    };

    if( form.valid ){
      this._tetrisService.checkToken(token).subscribe(data => {
        if(!data['success']){
          form.get('token').setErrors({ invalidToken: true });
        }
        else{
          //this.startEvent.emit({score: this._score});
          this._tetrisService.score = score;
          this._router.navigate(['/game']);
        }
      });
    }

  }
}
