import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeSuccessfulCalculatorComponent } from './age-successful-calculator.component';

describe('AgeSuccessfulCalculatorComponent', () => {
  let component: AgeSuccessfulCalculatorComponent;
  let fixture: ComponentFixture<AgeSuccessfulCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeSuccessfulCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeSuccessfulCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
