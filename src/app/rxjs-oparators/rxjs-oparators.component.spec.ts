import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOparatorsComponent } from './rxjs-oparators.component';

describe('RxjsOparatorsComponent', () => {
  let component: RxjsOparatorsComponent;
  let fixture: ComponentFixture<RxjsOparatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOparatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOparatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
