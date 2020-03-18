import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMobileComponent } from './background-mobile.component';

describe('BackgroundMobileComponent', () => {
  let component: BackgroundMobileComponent;
  let fixture: ComponentFixture<BackgroundMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
