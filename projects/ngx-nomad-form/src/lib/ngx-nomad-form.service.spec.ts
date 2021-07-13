import { TestBed } from '@angular/core/testing';

import { NgxNomadFormService } from './ngx-nomad-form.service';

describe('NgxNomadFormService', () => {
  let service: NgxNomadFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNomadFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
