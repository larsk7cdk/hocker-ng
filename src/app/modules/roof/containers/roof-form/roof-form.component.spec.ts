import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofFormComponent } from './roof-form.component';

describe('RoofFormComponent', () => {
  let component: RoofFormComponent;
  let fixture: ComponentFixture<RoofFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
