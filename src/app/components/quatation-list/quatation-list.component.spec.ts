import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatationListComponent } from './quatation-list.component';

describe('QuatationListComponent', () => {
  let component: QuatationListComponent;
  let fixture: ComponentFixture<QuatationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuatationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
