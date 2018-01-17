import { TestBed, inject } from '@angular/core/testing';

import { TicksService } from './ticks.service';

describe('TicksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicksService]
    });
  });

  it('should be created', inject([TicksService], (service: TicksService) => {
    expect(service).toBeTruthy();
  }));
});
