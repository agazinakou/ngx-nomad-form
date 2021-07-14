# Nomad Form

<img src="https://raw.githubusercontent.com/agazinakou/ngx-nomad-form/master/ngx-nomad-form.jpg " width="100" />

Very simple form generator written with [Angular 12](https://angular.io/), for [Bootstrap 5](https://getbootstrap.com/).

Don't re-invent the wheel, Just re-align It

## Project Principles

- A clean & beautiful interface
- Highly configurable and customizable
- Responsive web app accessible from any device on the network

## What you can do ?

- Build any kind of form element components. Not just traditional inputs, but anything you want and get that validation for free
- Add validation rules and use them with simple syntax
- Use handlers for different states of your form. Ex. "onSubmit", "onError", "onValid" etc.
- Pass external errors to the form to invalidate elements
- You can dynamically add form elements to your form and they will register/unregister to the form

## Installation
First you need to install the npm module:

``` 
$ npm install @ngx-nomad-form
```
This will install all dependencies required for use the package.


## Usage

#### 1. Import the `NgxNormadFormModule`:

Finally, you can use ngx-nomad-form in your Angular project. You have to import `NgxNormadFormModule.forRoot()` in the root NgModule of your application.

The [`forRoot`](https://angular.io/api/router/RouterModule#forroot) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.
This method allows you to configure the `NgxNormadFormModule`.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNormadFormModule } from '@ngx-nomad-form';

@NgModule({
    imports: [
        BrowserModule,
        NgxNormadFormModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### SharedModule

If you use a [`SharedModule`](https://angular.io/guide/sharing-ngmodules) that you import in multiple other feature modules,
you can export the `NgxNormadFormModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        CommonModule,
        NgxNormadFormModule
    ]
})
export class SharedModule { }
```

> Note: Never call a `forRoot` static method in the `SharedModule`. You might end up with different instances of the service in your injector tree. But you can use `forChild` if necessary.



#### 2. Create your form

```ts
import { Component } from '@angular/core';
import { FieldConfig } from 'ngx-nomad-form';

@Component({
    selector: 'app-root',
    template: `
      <nf-form [fields]="fields" (callBack)="callBack($event)"></nf-form>
    `
})

export class AppComponent {
    
  //My fields
  fields: FieldConfig[] = [{
    type: 'input',
    label: 'Username',
    inputType: 'text',
    name: 'name',
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Name Required'
    }, {
      name: 'pattern',
      validator: Validators.pattern('^[a-zA-Z]+$'),
      message: 'Accept only text'
    }]
  },  {
    type: 'button',
    color: 'danger',
    label: 'Save'
  }];

  ...

  callBack(value: any){
    console.log(value);
  }
}
```

##### Example of JSON

```ts
//Input
{
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
}

```

```ts
//Radio
{
  type: 'radiobutton',
  label: 'Gender',
  name: 'gender',
  options: ['Male', 'Female'],
  value: 'Male',
  col: 6,
}
```

```ts
//Date
{
  type: 'date',
  label: 'Date of Birth',
  name: 'dob',
  col: 12,
  validations: [{
    name: 'required',
    validator: Validators.required,
    message: 'Date of Birth Required'
  }]
}
```

```ts
//Select
{
  type: 'select',
  label: 'Country',
  name: 'country',
  value: 'Africa',
  col: 6,
  options: ['America', 'Africa']
}

```

```ts
//Checkbox
{
  type: 'checkbox',
  label: 'Accept Terms',
  name: 'term',
  col: 6,
  value: true
}
```

```ts
//Button
{
  type: 'button',
  color: 'primary',
  label: 'Save'
}
```

## Support
If you need technical support or have any questions, please send a message to agazinakou@gmail.com
