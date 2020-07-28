import { TestBed } from '@angular/core/testing';

import { MahasiswaService } from './mahasiswa.service';

describe('MahasiswaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MahasiswaService = TestBed.get(MahasiswaService);
    expect(service).toBeTruthy();
  });
});
