import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDetailsComponent } from './vehicles-details.component';

describe('VehiclesDetailsComponent', () => {
  let component: VehiclesDetailsComponent;
  let fixture: ComponentFixture<VehiclesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
