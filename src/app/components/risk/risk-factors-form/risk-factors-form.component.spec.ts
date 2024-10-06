import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskFactorsFormComponent } from './risk-factors-form.component';

describe('RiskFactorsFormComponent', () => {
  let component: RiskFactorsFormComponent;
  let fixture: ComponentFixture<RiskFactorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskFactorsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskFactorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
