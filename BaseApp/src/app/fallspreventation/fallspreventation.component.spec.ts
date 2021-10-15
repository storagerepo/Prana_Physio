import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallspreventationComponent } from './fallspreventation.component';

describe('FallspreventationComponent', () => {
  let component: FallspreventationComponent;
  let fixture: ComponentFixture<FallspreventationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallspreventationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallspreventationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
