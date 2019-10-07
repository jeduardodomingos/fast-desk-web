import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateInputComponent } from './validate-input.component';

describe('ValidateInputComponent', () => {
  let component: ValidateInputComponent;
  let fixture: ComponentFixture<ValidateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
