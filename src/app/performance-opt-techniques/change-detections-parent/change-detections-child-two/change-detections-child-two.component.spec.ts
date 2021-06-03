import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionsChildTwoComponent } from './change-detections-child-two.component';

describe('ChangeDetectionsChildTwoComponent', () => {
  let component: ChangeDetectionsChildTwoComponent;
  let fixture: ComponentFixture<ChangeDetectionsChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionsChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionsChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
