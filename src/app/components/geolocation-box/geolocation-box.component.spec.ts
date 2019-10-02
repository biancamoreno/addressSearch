import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationBoxComponent } from './geolocation-box.component';

describe('GeolocationBoxComponent', () => {
  let component: GeolocationBoxComponent;
  let fixture: ComponentFixture<GeolocationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
