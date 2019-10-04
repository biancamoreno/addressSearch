import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from 'src/app/services/zipcode/zipcode.service';

@Component({
  selector: 'app-geolocation-box',
  templateUrl: './geolocation-box.component.html',
  styleUrls: ['./geolocation-box.component.scss']
})
export class GeolocationBoxComponent implements OnInit {

  address: object;
  status: string;
  openBox = false;

  constructor(private _zipcodeService: ZipcodeService) {
    this._zipcodeService.address_data.subscribe($data => {
      if (!$data) { return; }
      this.address = $data;
      this.status = $data.status;
      this.openBox = true;
    });
  }

  ngOnInit() {
  }

}
