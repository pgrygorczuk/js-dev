import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
