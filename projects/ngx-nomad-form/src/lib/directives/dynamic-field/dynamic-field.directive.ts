import { FileComponent } from './../../components/file/file.component';
import { ComponentFactoryResolver,  Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckBoxComponent } from '../../components/check-box/check-box.component';
import { DateComponent } from '../../components/date/date.component';
import { InputComponent } from '../../components/input/input.component';
import { RadioComponent } from '../../components/radio/radio.component';
import { SelectComponent } from '../../components/select/select.component';
import { FieldConfig } from '../../interfaces/field-config';
import { TextareaComponent } from '@ngx-nomad-form/components';

const componentMapper: any = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadioComponent,
  checkbox: CheckBoxComponent,
  file: FileComponent,
  textarea: TextareaComponent
};

@Directive({
  selector: '[nf-dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;

  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field?.type]);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
  }

}
