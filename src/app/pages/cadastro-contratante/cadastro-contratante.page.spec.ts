import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContratantePage } from './cadastro-contratante.page';

describe('CadastroContratantePage', () => {
  let component: CadastroContratantePage;
  let fixture: ComponentFixture<CadastroContratantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroContratantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroContratantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
