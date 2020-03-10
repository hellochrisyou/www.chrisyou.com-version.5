import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevVersionComponent } from './prev-version.component';

describe('PrevVersionComponent', () => {
  let component: PrevVersionComponent;
  let fixture: ComponentFixture<PrevVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
