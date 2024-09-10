import { TestBed } from '@angular/core/testing';

import { RandomAPIService } from './random-api.service';

describe('RandomAPIService', () => {
  let service: RandomAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
