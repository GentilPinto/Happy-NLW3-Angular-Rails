import { TestBed } from '@angular/core/testing';

import { OprhanageService } from './oprhanage.service';

describe('OprhanageService', () => {
  let service: OprhanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OprhanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
