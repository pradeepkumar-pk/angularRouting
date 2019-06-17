import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContactsComponent } from './settings-contacts.component';

describe('SettingsContactsComponent', () => {
  let component: SettingsContactsComponent;
  let fixture: ComponentFixture<SettingsContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
