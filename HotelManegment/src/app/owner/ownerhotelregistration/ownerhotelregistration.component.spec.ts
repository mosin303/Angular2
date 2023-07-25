import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhotelregistrationComponent } from './ownerhotelregistration.component';

describe('OwnerhotelregistrationComponent', () => {
  let component: OwnerhotelregistrationComponent;
  let fixture: ComponentFixture<OwnerhotelregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerhotelregistrationComponent]
    });
    fixture = TestBed.createComponent(OwnerhotelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
