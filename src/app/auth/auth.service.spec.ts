import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from "@angular/router";

import { AuthService } from './auth.service';

class MockRouter { public navigate() {}; }

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Router,  useClass: MockRouter },
        RouterOutlet,
        AuthService
      ],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
