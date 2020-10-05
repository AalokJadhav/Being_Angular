import { TestBed } from '@angular/core/testing';

import { BioDatasService } from './bio-datas.service';

describe('BioDatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioDatasService = TestBed.get(BioDatasService);
    expect(service).toBeTruthy();
  });
});
