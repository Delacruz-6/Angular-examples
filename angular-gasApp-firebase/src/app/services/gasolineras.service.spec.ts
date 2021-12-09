import { TestBed } from '@angular/core/testing';

import { GasolinerasService } from './gasolineras.service';

describe('GasolinerasService', () => {
  let service: GasolinerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasolinerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
