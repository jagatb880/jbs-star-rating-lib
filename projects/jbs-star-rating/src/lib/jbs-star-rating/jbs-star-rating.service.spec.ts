import { TestBed } from '@angular/core/testing';

import { JbsStarRatingService } from './jbs-star-rating.service';

describe('JbsStarRatingService', () => {
  let service: JbsStarRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JbsStarRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
