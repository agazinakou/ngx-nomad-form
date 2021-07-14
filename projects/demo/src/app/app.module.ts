import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxNomadFormModule } from 'projects/ngx-nomad-form/src/public-api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxNomadFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
