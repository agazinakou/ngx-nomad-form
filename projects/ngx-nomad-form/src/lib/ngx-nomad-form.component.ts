import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './components';
import { FieldConfig } from './interfaces/field-config';

@Component({
  selector: 'nf-form',
  template: `<nf-dynamic-form [fields]="fields" (submit)="submit($event)"></nf-dynamic-form>`,
  styles: [
  ]
})
export class NgxNomadFormComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  @Input() fields: FieldConfig[] = [];
  @Output() callBack: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  submit(value: any) {
    this.callBack.emit(value);
  }

  ngOnInit(): void {
  }

}
