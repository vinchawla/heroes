/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { FoldersService } from './folders.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})

export class FoldersComponent implements OnInit, OnDestroy {
  me: MicrosoftGraph.User;
  items: MicrosoftGraph.DriveItem[];
  subsGetMe: Subscription;
  subsGetFiles: Subscription;

  constructor(
    private foldersService: FoldersService,
    private authService: AuthService
  ) { }

  checkVals() {
    console.log("checking");
  }

  ngOnInit() {
    console.log("folders init");
    this.subsGetFiles = this.foldersService.getFiles().subscribe(items => this.items = items, console.error, function() {console.log("foo");});
    this.subsGetMe = this.foldersService.getMe().subscribe(me => this.me = me, console.error, function() {console.log("bar")});
    console.log("sub'd");
  }

  /*
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  */

  ngOnDestroy() {
    console.log("destroy");
    this.subsGetMe.unsubscribe();
    this.subsGetFiles.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    console.log("onLogin");
    this.authService.login();
  }
}