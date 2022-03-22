import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngcustpipeComponent } from './angcustpipe.component';

describe('AngcustpipeComponent', () => {
  let component: AngcustpipeComponent;
  let fixture: ComponentFixture<AngcustpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngcustpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngcustpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
