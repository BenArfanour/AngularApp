import { TestBed } from '@angular/core/testing';

import { NourService } from './nour.service';

describe('NourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NourService = TestBed.get(NourService);
    expect(service).toBeTruthy();
  });
});
