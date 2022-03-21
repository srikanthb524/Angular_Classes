import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcompComponent } from './switchcomp.component';

describe('SwitchcompComponent', () => {
  let component: SwitchcompComponent;
  let fixture: ComponentFixture<SwitchcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
