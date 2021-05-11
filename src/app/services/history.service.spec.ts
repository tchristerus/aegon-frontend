import {TestBed} from '@angular/core/testing';

import {HistoryService} from './history.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HistoryService', () => {
  let service: HistoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HistoryService
      ]
    });
    service = TestBed.inject(HistoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch history calculations', (done) => {
    // service.loadInitialHistory();
    const historyRequests = httpMock.expectOne('http://localhost:8080/api/calculation');
    expect(historyRequests.request.method).toBe('GET');
    // httpMock.verify();
  });

})
;
