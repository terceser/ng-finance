import { TestBed } from '@angular/core/testing';

import { EChartsService } from './echarts.service';

describe('EchartsService', () => {
  let service: EChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
