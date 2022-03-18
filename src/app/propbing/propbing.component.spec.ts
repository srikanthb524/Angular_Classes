import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropbingComponent } from './propbing.component';

describe('PropbingComponent', () => {
  let component: PropbingComponent;
  let fixture: ComponentFixture<PropbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropbingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
