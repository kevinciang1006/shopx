import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingreqPage } from './trendingreq.page';

describe('TrendingreqPage', () => {
  let component: TrendingreqPage;
  let fixture: ComponentFixture<TrendingreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingreqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
