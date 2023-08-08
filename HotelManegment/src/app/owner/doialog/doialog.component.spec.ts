import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoialogComponent } from './doialog.component';

describe('DoialogComponent', () => {
  let component: DoialogComponent;
  let fixture: ComponentFixture<DoialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoialogComponent]
    });
    fixture = TestBed.createComponent(DoialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
