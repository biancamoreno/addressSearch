import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from '../directives/dynamic-field/dynamic-field.directive';
import {NgxMaskModule} from 'ngx-mask';
import { GeolocationBoxComponent } from './geolocation-box/geolocation-box.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    GeolocationBoxComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    GeolocationBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  entryComponents: [InputComponent, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
