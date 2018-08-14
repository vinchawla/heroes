import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as hello from 'hellojs/dist/hello.all.js';

import { Configs } from '../shared/configs';

@Injectable()
export class AuthService {
  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  initAuth() {
    console.log("initAuth");
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: Configs.authUrl
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );
    console.log("initAuth end");
  }

  login() {
    console.log("login");
    hello('msft').login({ scope: Configs.scope }).then(
      () => {
        this.zone.run(() => {
          this.router.navigate(['/folders']);
        });
      },
      e => console.error(e.error.message)
    );
  }

  logout() {
    hello('msft').logout().then(
      () => window.location.href = '/',
      e => console.error(e.error.message)
    );
  }
}
