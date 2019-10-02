import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  address_data = new BehaviorSubject<any>('');
  _address_data = this.address_data.asObservable();

  constructor(private _http: HttpClient) { }

  searchAddress(cep: string) {
    return this._http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe($data => {
        this.address_data.next($data);
      });
  }
}
