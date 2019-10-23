import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTapViewComponent } from './multi-tap-view.component';

describe('MultiTapViewComponent', () => {
  let component: MultiTapViewComponent;
  let fixture: ComponentFixture<MultiTapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
