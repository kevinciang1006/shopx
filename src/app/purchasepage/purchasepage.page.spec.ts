import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepagePage } from './purchasepage.page';

describe('PurchasepagePage', () => {
  let component: PurchasepagePage;
  let fixture: ComponentFixture<PurchasepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
