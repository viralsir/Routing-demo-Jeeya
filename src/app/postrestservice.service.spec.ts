import { TestBed } from '@angular/core/testing';

import { PostrestserviceService } from './postrestservice.service';

describe('PostrestserviceService', () => {
  let service: PostrestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostrestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
