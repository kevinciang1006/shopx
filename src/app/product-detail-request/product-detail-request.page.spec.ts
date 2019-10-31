import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailRequestPage } from './product-detail-request.page';

describe('ProductDetailRequestPage', () => {
  let component: ProductDetailRequestPage;
  let fixture: ComponentFixture<ProductDetailRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
