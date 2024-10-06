import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMethodologyFormComponent } from './expert-methodology-form.component';

describe('ExpertMethodologyFormComponent', () => {
  let component: ExpertMethodologyFormComponent;
  let fixture: ComponentFixture<ExpertMethodologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpertMethodologyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertMethodologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
