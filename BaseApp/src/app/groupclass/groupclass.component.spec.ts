import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupclassComponent } from './groupclass.component';

describe('GroupclassComponent', () => {
  let component: GroupclassComponent;
  let fixture: ComponentFixture<GroupclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
