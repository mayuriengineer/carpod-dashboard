import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoEditprofileComponent } from './vo-editprofile.component';

describe('VoEditprofileComponent', () => {
  let component: VoEditprofileComponent;
  let fixture: ComponentFixture<VoEditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoEditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
