import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarpodComponent } from './editcarpod.component';

describe('EditcarpodComponent', () => {
  let component: EditcarpodComponent;
  let fixture: ComponentFixture<EditcarpodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcarpodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcarpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
