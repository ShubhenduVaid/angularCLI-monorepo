import { TestBed, inject } from '@angular/core/testing';

import { ServiceInterface } from './serviceinterface.service';

describe('ServiceInterface', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceInterface]
    });
  });

  it('should be created', inject([ServiceInterface], (service: ServiceInterface) => {
    expect(service).toBeTruthy();
  }));
});
