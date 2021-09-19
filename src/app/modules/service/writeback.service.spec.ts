windowimport {TestBed} from '@angular/core/testing';

import {WriteBackService } from './writeback.service';

describe('WriteBackService', () => {
  let service: WriteBackService;

beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.inject(WriteBackService);
});
