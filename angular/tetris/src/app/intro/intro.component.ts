import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Score } from '../models/score';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit
{
  @Output() startEvent = new EventEmitter();
  @ViewChild('personForm') personForm: NgForm;
  //personForm: FormGroup;

  constructor(private _playerService: PlayerService, private _router: Router) {
    this._playerService.clearLS();
  }

  ngOnInit(): void {
  }

  // private initializeForm(): void{
  //   this.personForm = this.fb.group({
  //     name: '',
  //     token: '',
  //     colorPalette: 'normal',
  //   });
  // }
  // onSubmit(): void{
  //   console.log(this.personForm);
  // }

  start(form: FormGroup)
  {
    const token = form.value.token;
    const colorPalette = form.value.colorPalette;
    const score: Score = {
      name: form.value.name,
      score: 0,
    };

    //console.log(form);

    if( form.valid ){
      this._playerService.checkToken(token).subscribe(data => {
        if(!data['success']){
          form.get('token').setErrors({ invalidToken: true });
        }
        else{
          //this.startEvent.emit({score: this._score});
          this._playerService.score = score;
          this._playerService.colorPalette = colorPalette;
          this._playerService.saveToLS();
          this._router.navigate(['/game/'+colorPalette]);
        }
      });
    }

  }
}
