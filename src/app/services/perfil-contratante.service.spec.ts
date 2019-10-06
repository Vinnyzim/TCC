import { TestBed } from '@angular/core/testing';

import { PerfilContratanteService } from './perfil-contratante.service';

describe('PerfilContratanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilContratanteService = TestBed.get(PerfilContratanteService);
    expect(service).toBeTruthy();
  });
});
