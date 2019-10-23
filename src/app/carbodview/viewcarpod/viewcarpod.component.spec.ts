import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcarpodComponent } from './viewcarpod.component';

describe('ViewcarpodComponent', () => {
  let component: ViewcarpodComponent;
  let fixture: ComponentFixture<ViewcarpodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcarpodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcarpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
