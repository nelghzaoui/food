import { TestBed } from '@angular/core/testing';

import { TacosService } from './tacos.service';

describe('TacosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacosService = TestBed.get(TacosService);
    expect(service).toBeTruthy();
  });
});
