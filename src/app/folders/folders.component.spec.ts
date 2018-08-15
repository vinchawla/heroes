import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from "@angular/router";
import { HttpService } from '../shared/http.service';
import { AuthService } from '../auth/auth.service';

import { FoldersService } from './folders.service';

import { FoldersComponent } from './folders.component';

class MockRouter { public navigate() {}; }

describe('FoldersComponent', () => {
  let component: FoldersComponent;
  let fixture: ComponentFixture<FoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersComponent ],
      providers: [ 
        {provide: Router,  useClass: MockRouter },
        RouterOutlet,
        FoldersService,
        HttpService,
        AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
