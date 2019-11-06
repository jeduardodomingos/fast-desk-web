import { TestBed } from '@angular/core/testing';

import { WebApiConnectorService } from './web-api-connector.service';

describe('WebApiConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebApiConnectorService = TestBed.get(WebApiConnectorService);
    expect(service).toBeTruthy();
  });
});
