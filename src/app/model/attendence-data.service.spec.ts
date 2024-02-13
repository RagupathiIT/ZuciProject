import { TestBed } from '@angular/core/testing';

import { AttendenceDataService } from './attendence-data.service';

describe('AttendenceDataService', () => {
  let service: AttendenceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
