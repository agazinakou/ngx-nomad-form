import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '@ngx-nomad-form/interfaces/field-config';
import { FormConfig } from '@ngx-nomad-form/interfaces/form-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  formConfig: FormConfig = {
    name: 'nomadFormDemo',
    enctype: 'text/plain',
  };

  fields: FieldConfig[] = [{
    type: 'input',
    label: 'Username',
    placeholder: 'Your username',
    inputType: 'text',
    name: 'name',
    col: 6,
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Name Required'
    }, {
      name: 'pattern',
      validator: Validators.pattern('^[a-zA-Z]+$'),
      message: 'Accept only text'
    }]
  }, {
    type: 'input',
    label: 'Email Address',
    inputType: 'email',
    name: 'email',
    col: 6,
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Email Required'
    }, {
      name: 'pattern',
      validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      message: 'Invalid email'
    }]
  }, {
    type: 'input',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    col: 12,
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Password Required'
    }]
  }, {
    type: 'radiobutton',
    label: 'Gender',
    name: 'gender',
    options: [{
      label: 'Man',
      value: 1
    },{
      label: 'Woman',
      value: 2
    }],
    value: 'Male',
    col: 6,
  }, {
    type: 'date',
    label: 'Date of Birth',
    name: 'dob',
    col: 12,
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Date of Birth Required'
    }]
  }, {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: '1',
    col: 6,
    options: [
      {
        label: 'Côte d\'Ivoire',
        value: 1
      },{
        label: 'Mali',
        value: 2
      }
    ]
  }, {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    col: 6,
    value: true,
  },{
    type: 'file',
    label: 'Description',
    name: 'description',
    col: 12,
    textareaCols: 10,
    textareaRows: 5,
    autocomplete: 'on',
    readonly: true
  }, {
    type: 'button',
    color: 'danger',
    label: 'Save',
    col: 12
  }];

  builderFormField: FieldConfig[] = [{
    type: 'input',
    label: 'Username',
    inputType: 'text',
    name: 'name',
    col: 6,
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Name Required'
    }, {
      name: 'pattern',
      validator: Validators.pattern('^[a-zA-Z]+$'),
      message: 'Accept only text'
    }]
  }];

  get fieldInput() {
    return JSON.stringify(this.fields, null, 2);
  }

  set fieldInput(v) {
    try{
    this.fields = JSON.parse(v);}
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }

  callBack(value: any){
    console.log(value);
  }

  change(value: any){
    console.log(value);
  }
}
