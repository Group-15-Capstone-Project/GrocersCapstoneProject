import { TestBed } from '@angular/core/testing';

import { EmpsignInService } from './empsign-in.service';

describe('EmpsignInService', () => {
  let service: EmpsignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
