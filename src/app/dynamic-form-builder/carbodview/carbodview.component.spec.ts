import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbodviewComponent } from './carbodview.component';

describe('CarbodviewComponent', () => {
  let component: CarbodviewComponent;
  let fixture: ComponentFixture<CarbodviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbodviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbodviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
