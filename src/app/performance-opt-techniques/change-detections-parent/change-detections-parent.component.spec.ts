import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionsParentComponent } from './change-detections-parent.component';

describe('ChangeDetectionsParentComponent', () => {
  let component: ChangeDetectionsParentComponent;
  let fixture: ComponentFixture<ChangeDetectionsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionsParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
