import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskGeneralFactorsFormComponent } from './risk-general-factors-form.component';

describe('RiskGeneralFactorsFormComponent', () => {
  let component: RiskGeneralFactorsFormComponent;
  let fixture: ComponentFixture<RiskGeneralFactorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskGeneralFactorsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskGeneralFactorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
