import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxNomadFormModule } from 'projects/ngx-nomad-form/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNomadFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
