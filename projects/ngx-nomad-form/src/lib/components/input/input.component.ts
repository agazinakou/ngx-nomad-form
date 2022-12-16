import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field-config';

@Component({
  selector: 'nf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

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
