import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FieldConfig, Validator } from 'src/app/interfaces/field.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() title: string;
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  get value() {
    return this.form.value;
  }

  createControl() {
    const group = this._formBuilder.group({});
    this.fields.forEach($field => {
      if ($field.type === 'button') { return; }
      const control = this._formBuilder.control(
        $field.value,
        this.bindValidations($field.validations || [])
      );
      group.addControl($field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach($valid => validList.push($valid.validator));
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach($field => {
      const control = formGroup.get($field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
