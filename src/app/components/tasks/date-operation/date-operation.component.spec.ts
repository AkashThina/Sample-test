import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOperationComponent } from './date-operation.component';

describe('DateOperationComponent', () => {
  let component: DateOperationComponent;
  let fixture: ComponentFixture<DateOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
