import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarbodComponent } from './addcarbod.component';

describe('AddcarbodComponent', () => {
  let component: AddcarbodComponent;
  let fixture: ComponentFixture<AddcarbodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcarbodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarbodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
