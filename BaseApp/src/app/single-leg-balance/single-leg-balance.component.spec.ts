import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLegBalanceComponent } from './single-leg-balance.component';

describe('SingleLegBalanceComponent', () => {
  let component: SingleLegBalanceComponent;
  let fixture: ComponentFixture<SingleLegBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLegBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLegBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
