import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosContratantePage } from './servicos-contratante.page';

describe('ServicosContratantePage', () => {
  let component: ServicosContratantePage;
  let fixture: ComponentFixture<ServicosContratantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosContratantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosContratantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
