import { TestBed } from '@angular/core/testing';

import { ColleagueServiceService } from './colleague-service.service';

describe('ColleagueServiceService', () => {
  let service: ColleagueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColleagueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
