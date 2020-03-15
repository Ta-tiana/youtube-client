import { TestBed } from '@angular/core/testing';

import { HttpSService } from './http-s.service';

describe('HttpServService', () => {
  let service: HttpSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
