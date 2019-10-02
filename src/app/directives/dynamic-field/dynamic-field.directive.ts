import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(private _resolver: ComponentFactoryResolver, private _container: ViewContainerRef) {}

  ngOnInit() {
    const componentMapper = {
      input: InputComponent,
      button: ButtonComponent
    },
    factory = this._resolver.resolveComponentFactory(componentMapper[this.field.type]);

    this.componentRef = this._container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
