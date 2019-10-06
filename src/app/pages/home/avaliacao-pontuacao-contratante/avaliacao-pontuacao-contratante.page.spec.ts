import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoPontuacaoContratantePage } from './avaliacao-pontuacao-contratante.page';

describe('AvaliacaoPontuacaoContratantePage', () => {
  let component: AvaliacaoPontuacaoContratantePage;
  let fixture: ComponentFixture<AvaliacaoPontuacaoContratantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoPontuacaoContratantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoPontuacaoContratantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
