import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field-config';

@Component({
  selector: 'nf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  field!: FieldConfig;
  group!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
