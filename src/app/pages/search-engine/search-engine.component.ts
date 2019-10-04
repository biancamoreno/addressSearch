import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
import { ZipcodeService } from 'src/app/services/zipcode/zipcode.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  address: object = {};
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'CEP',
      /*
        in this case the tel type was used because the number type does not work together with the mask
        and the keyboard keeps numeric in mobile for the best UX
      */
      inputType: 'tel',
      name: 'cep',
      mask: '00000-000',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Campo obrigatório'
        },
        {
          name: 'minlength',
          validator: Validators.minLength(8),
          message: 'O CEP deve conter 8 dígitos'
        }
      ]
    },
    {
      type: 'button',
      label: 'Buscar'
    }
  ];

  constructor(private _zipcodeService: ZipcodeService) {
    this._zipcodeService.address_data.subscribe($data => {
      if (!$data) { return; }
      this.address = $data;
    });
  }

  ngOnInit() {
  }

  submitSearch() {
    const cepValue = this.form.value.cep;
    this.address['status'] = 'loading';
    this._zipcodeService.address_data.next(this.address);
    this._zipcodeService.searchAddress(cepValue);
  }

}
