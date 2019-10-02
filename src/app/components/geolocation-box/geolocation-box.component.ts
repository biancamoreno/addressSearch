import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from 'src/app/services/zipcode/zipcode.service';

@Component({
  selector: 'app-geolocation-box',
  templateUrl: './geolocation-box.component.html',
  styleUrls: ['./geolocation-box.component.scss']
})
export class GeolocationBoxComponent implements OnInit {

  address: object;
  openBox = true;

  constructor(private _zipcodeService: ZipcodeService) {
    this._zipcodeService.address_data.subscribe($data => {
      if (!$data) { return; }
      this.address = $data;
      this.openBox = true;
      console.log($data);
    });
  }

  ngOnInit() {
  }

}
