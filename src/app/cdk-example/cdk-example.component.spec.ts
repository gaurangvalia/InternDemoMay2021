import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkExampleComponent } from './cdk-example.component';

describe('CdkExampleComponent', () => {
  let component: CdkExampleComponent;
  let fixture: ComponentFixture<CdkExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
