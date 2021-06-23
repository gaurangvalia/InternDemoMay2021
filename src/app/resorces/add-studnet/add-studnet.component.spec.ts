import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudnetComponent } from './add-studnet.component';

describe('AddStudnetComponent', () => {
  let component: AddStudnetComponent;
  let fixture: ComponentFixture<AddStudnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
