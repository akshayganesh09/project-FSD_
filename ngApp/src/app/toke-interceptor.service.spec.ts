import { TestBed } from '@angular/core/testing';

import { TokeInterceptorService } from './toke-interceptor.service';

describe('TokeInterceptorService', () => {
  let service: TokeInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
