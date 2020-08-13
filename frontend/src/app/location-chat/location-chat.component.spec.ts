import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChatComponent } from './location-chat.component';

describe('LocationChatComponent', () => {
  let component: LocationChatComponent;
  let fixture: ComponentFixture<LocationChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
