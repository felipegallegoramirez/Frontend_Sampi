import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsFormComponent } from './controls-form.component';

describe('ControlsFormComponent', () => {
  let component: ControlsFormComponent;
  let fixture: ComponentFixture<ControlsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
