import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
  //@ViewChild('personForm') personForm: NgForm;
  public personForm: FormGroup;
  public submitted = false;

  constructor(
    private _playerService: PlayerService,
    private _router: Router,
    private _fb: FormBuilder ) {
    
    //this._playerService.clearLS();
    this.initializeForm();

    this.personForm.get(['colorPalette']).valueChanges.subscribe( value => {
      this._playerService.colorPalette = value;
    });

  }

  ngOnInit(): void {
  }

  private initializeForm(): void{
    this.personForm = this._fb.group({
      name:  [this._playerService.score.name, [Validators.required, Validators.minLength(4)]],
      token: ['', [Validators.required, Validators.minLength(4)]],
      colorPalette: [this._playerService.colorPalette, [Validators.required]],
    });
  }

  getColorPalette(): string {
    return this._playerService.colorPalette;
  }

  reset(): void {
    this._playerService.clearLS();
    this.personForm.markAsPristine();
    this.personForm.markAsUntouched();
    this.personForm.reset();
    this.submitted = false;
    console.log(this.personForm);
  }

  onSubmit(personForm: FormGroup): void{
    this.submitted = true;
    if(personForm.valid){
      this.start(personForm);
    }
  }

  start(personForm: FormGroup)
  {
    const token = this.personForm.value.token;
    const colorPalette = this.personForm.value.colorPalette;
    const score: Score = {
      name: this.personForm.value.name,
      score: 0,
    };

    if( this.personForm.valid ){
      this._playerService.checkToken(token).subscribe(data => {
        if(!data['success']){
          //this.personForm.get('token').setErrors({ invalidToken: true });
          this.personForm.controls.token.setErrors({ invalidToken: true });
          console.log('Invalid token');
        }
        else{
          this._playerService.score = score;
          this._playerService.colorPalette = colorPalette;
          this._playerService.saveToLS();
          this._router.navigate(['/game/'+colorPalette]);
        }
      });
    }

  }
}
