import { TestBed } from '@angular/core/testing';

import { GymnasessService } from './gymnasess.service';

describe('GymnasessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymnasessService = TestBed.get(GymnasessService);
    expect(service).toBeTruthy();
  });
});
