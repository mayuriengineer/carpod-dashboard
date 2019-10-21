import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarpodComponent } from './addcarpod.component';

describe('AddcarpodComponent', () => {
  let component: AddcarpodComponent;
  let fixture: ComponentFixture<AddcarpodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcarpodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
