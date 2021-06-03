import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceOptTechniquesComponent } from './performance-opt-techniques.component';

describe('PerformanceOptTechniquesComponent', () => {
  let component: PerformanceOptTechniquesComponent;
  let fixture: ComponentFixture<PerformanceOptTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceOptTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceOptTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
