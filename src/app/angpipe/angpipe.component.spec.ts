import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngpipeComponent } from './angpipe.component';

describe('AngpipeComponent', () => {
  let component: AngpipeComponent;
  let fixture: ComponentFixture<AngpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
