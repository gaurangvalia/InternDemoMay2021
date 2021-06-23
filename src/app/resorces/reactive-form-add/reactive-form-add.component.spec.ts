import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddComponent } from './reactive-form-add.component';

describe('ReactiveFormAddComponent', () => {
  let component: ReactiveFormAddComponent;
  let fixture: ComponentFixture<ReactiveFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
