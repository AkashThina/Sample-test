import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFutureComponent } from './date-future.component';

describe('DateFutureComponent', () => {
  let component: DateFutureComponent;
  let fixture: ComponentFixture<DateFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
