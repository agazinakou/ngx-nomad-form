import { FieldConfig } from './../../interfaces/field-config';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'nf-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  field!: FieldConfig;
  group!: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  validate(field: any, validation: any){
    const title = this.group.get(field ? field : '');
    if (title){
      return title.touched && title.hasError(validation);
    } else {
      return null;
    }
  }

}
