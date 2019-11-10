import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTripPage } from './post-trip.page';

describe('PostTripPage', () => {
  let component: PostTripPage;
  let fixture: ComponentFixture<PostTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
