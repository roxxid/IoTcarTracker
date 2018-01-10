import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightAlertsComponent } from './hight-alerts.component';

describe('HightAlertsComponent', () => {
  let component: HightAlertsComponent;
  let fixture: ComponentFixture<HightAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
