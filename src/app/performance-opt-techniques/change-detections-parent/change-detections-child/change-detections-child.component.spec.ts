import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionsChildComponent } from './change-detections-child.component';

describe('ChangeDetectionsChildComponent', () => {
  let component: ChangeDetectionsChildComponent;
  let fixture: ComponentFixture<ChangeDetectionsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
