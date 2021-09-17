import { TestBed } from '@angular/core/testing';

import { EmprequestService } from './emprequest.service';

describe('EmprequestService', () => {
  let service: EmprequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
