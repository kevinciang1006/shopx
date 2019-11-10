import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegaraPage } from './negara.page';

describe('NegaraPage', () => {
  let component: NegaraPage;
  let fixture: ComponentFixture<NegaraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegaraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
