import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsWindowsFormComponent } from './doors-windows-form.component';

describe('DoorsWindowsFormComponent', () => {
  let component: DoorsWindowsFormComponent;
  let fixture: ComponentFixture<DoorsWindowsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsWindowsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsWindowsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
