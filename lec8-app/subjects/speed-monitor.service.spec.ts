import { TestBed } from '@angular/core/testing';

import { SpeedMonitorService } from './speed-monitor.service';

describe('SpeedMonitorService', () => {
  let service: SpeedMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
