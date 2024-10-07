import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyToolkitComponent } from './company-toolkit.component';

describe('CompanyToolkitComponent', () => {
  let component: CompanyToolkitComponent;
  let fixture: ComponentFixture<CompanyToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyToolkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
