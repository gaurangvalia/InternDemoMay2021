import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResorcesComponent } from './resorces.component';

describe('ResorcesComponent', () => {
  let component: ResorcesComponent;
  let fixture: ComponentFixture<ResorcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResorcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResorcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
