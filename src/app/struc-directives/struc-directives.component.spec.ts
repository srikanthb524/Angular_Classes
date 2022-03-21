import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDirectivesComponent } from './struc-directives.component';

describe('StrucDirectivesComponent', () => {
  let component: StrucDirectivesComponent;
  let fixture: ComponentFixture<StrucDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
