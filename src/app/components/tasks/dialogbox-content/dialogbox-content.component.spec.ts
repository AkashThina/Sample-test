import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxContentComponent } from './dialogbox-content.component';

describe('DialogboxContentComponent', () => {
  let component: DialogboxContentComponent;
  let fixture: ComponentFixture<DialogboxContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogboxContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogboxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
