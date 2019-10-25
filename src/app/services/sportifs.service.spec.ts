import { TestBed } from '@angular/core/testing';

import { SportifsService } from './sportifs.service';

describe('SportifsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportifsService = TestBed.get(SportifsService);
    expect(service).toBeTruthy();
  });
});
