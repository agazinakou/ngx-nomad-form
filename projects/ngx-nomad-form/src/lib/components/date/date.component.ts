import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field-config';

@Component({
  selector: 'nf-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  field!: FieldConfig;
  group!: FormGroup;

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
