import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field-config';
import { FormConfig } from '../../interfaces/form-config';

@Component({
  selector: 'nf-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[] = [];
  @Input() formConfig: FormConfig = {};
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
    this.detectChange();
  }

  get value() {return this.form?.value; }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach((field: any) => {
      if(field.type === 'button'){
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
      return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
        const validList: any[] = [];
        validations.forEach((valid: { validator: any}) => {
          validList.push(valid.validator);
        });
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form?.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: any) {
    Object.keys(formGroup.controls).forEach(field => {
      const control: any = formGroup.get(field);
      control.markAsTouched({
        onlySelf: true
      });
    });
  }

  detectChange(): void {
    this.form.valueChanges.subscribe(val => {
      this.onChange.emit(this.form.value);
    });
  }

}
