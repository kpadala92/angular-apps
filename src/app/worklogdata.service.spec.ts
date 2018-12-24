import { TestBed } from '@angular/core/testing';

import { WorklogdataService } from './worklogdata.service';

describe('WorklogdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorklogdataService = TestBed.get(WorklogdataService);
    expect(service).toBeTruthy();
  });
});
