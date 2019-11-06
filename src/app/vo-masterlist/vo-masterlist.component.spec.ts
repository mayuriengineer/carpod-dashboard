import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoMasterlistComponent } from './vo-masterlist.component';

describe('VoMasterlistComponent', () => {
  let component: VoMasterlistComponent;
  let fixture: ComponentFixture<VoMasterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoMasterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoMasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
