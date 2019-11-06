import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoAddnewComponent } from './vo-addnew.component';

describe('VoAddnewComponent', () => {
  let component: VoAddnewComponent;
  let fixture: ComponentFixture<VoAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
