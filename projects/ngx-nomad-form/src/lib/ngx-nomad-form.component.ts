import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './components';
import { FieldConfig } from './interfaces/field-config';
import { FormConfig } from './interfaces/form-config';

@Component({
  selector: 'nf-form',
  template: `<nf-dynamic-form
    [fields]="fields"
    [formConfig]="formConfig"
    (onChange)="change($event)"
    (submit)="submit($event)">
    </nf-dynamic-form>`,
  styles: [
  ]
})
export class NgxNomadFormComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  @Input() fields: FieldConfig[] = [];
  @Input() formConfig: FormConfig = {};
  @Output() callBack: EventEmitter<any> = new EventEmitter<any>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  submit(value: any) {
    this.callBack.emit(value);
  }

  change(value: any){
    this.onChange.emit(value);
  }

  ngOnInit(): void {
  }

}
