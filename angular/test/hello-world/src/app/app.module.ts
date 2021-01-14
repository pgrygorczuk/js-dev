import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- add this

import { AppComponent } from './app.component';
import { ExampleFormComponent } from './example-form/example-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
