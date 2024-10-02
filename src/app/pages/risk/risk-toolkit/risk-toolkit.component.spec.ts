import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskToolkitComponent } from './risk-toolkit.component';

describe('RiskToolkitComponent', () => {
  let component: RiskToolkitComponent;
  let fixture: ComponentFixture<RiskToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskToolkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
