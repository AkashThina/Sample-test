import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Under18Component } from './under18.component';

describe('Under18Component', () => {
  let component: Under18Component;
  let fixture: ComponentFixture<Under18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Under18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Under18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
