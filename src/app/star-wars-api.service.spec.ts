import { TestBed, inject } from '@angular/core/testing';

import { StarWarsAPIService } from './star-wars-api.service';

describe('StarWarsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsAPIService]
    });
  });

  it('should be created', inject([StarWarsAPIService], (service: StarWarsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
