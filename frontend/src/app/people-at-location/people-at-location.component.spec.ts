import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAtLocationComponent } from './people-at-location.component';

describe('PeopleAtLocationComponent', () => {
  let component: PeopleAtLocationComponent;
  let fixture: ComponentFixture<PeopleAtLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAtLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
