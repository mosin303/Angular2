import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhotelComponent } from './newhotel.component';

describe('NewhotelComponent', () => {
  let component: NewhotelComponent;
  let fixture: ComponentFixture<NewhotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewhotelComponent]
    });
    fixture = TestBed.createComponent(NewhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
