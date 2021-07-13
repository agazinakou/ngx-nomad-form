import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NfConfig, NF_CONFIG_TOKEN } from './nf-config';
import { NgxNomadFormComponent } from './ngx-nomad-form.component';
import { NgxNomadFormService } from './ngx-nomad-form.service';
import {
  SelectComponent,
  ButtonComponent,
  InputComponent,
  DateComponent,
  RadioComponent,
  CheckBoxComponent,
  DynamicFormComponent
} from './components';
import { DynamicFieldDirective } from './directives/dynamic-field/dynamic-field.directive';


const formElements = [
  InputComponent,
  ButtonComponent,
  SelectComponent,
  DateComponent,
  RadioComponent,
  CheckBoxComponent,
];


@NgModule({
  declarations: [
    ...formElements,
    DynamicFormComponent,
    DynamicFieldDirective,
    NgxNomadFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...formElements,
    NgxNomadFormComponent
  ],
  providers: [NgxNomadFormService]
})
export class NgxNomadFormModule {
  static forRoot(config: NfConfig): ModuleWithProviders<NgxNomadFormModule> {
    return {
      ngModule: NgxNomadFormModule,
      providers: [{ provide: NF_CONFIG_TOKEN, useValue: config }],
    };
  }
}
