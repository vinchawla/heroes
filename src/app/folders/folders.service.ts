/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import * as request from 'superagent';

import { HttpService } from '../shared/http.service';

@Injectable()
export class FoldersService {
  url = 'https://graph.microsoft.com/v1.0';

  constructor(
    private httpService: HttpService) {}

  getClient(): MicrosoftGraphClient.Client {
      var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
        done(null, this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getMe(): Observable<MicrosoftGraph.User> {
    var client = this.getClient();
    return Observable.fromPromise(client
      .api('me')
      .select("displayName, mail, userPrincipalName")
      .get()
      .then((res => {
        console.log("me: " + res);
        return res;
      }))
    );
  }

  getFiles(): Observable<MicrosoftGraph.DriveItem[]> {
    var client = this.getClient();
    return Observable.fromPromise(client
        .api('me/drive/root/children')
        //.select("name, webUrl, lastModifiedDateTime")
        .get()        
        .then((res => {
          let items: [MicrosoftGraph.DriveItem] = res.value;
          for (let item of items) { //iterate through the files
            console.log(item.name);
            console.log(item.webUrl);
            console.log(item.lastModifiedDateTime);                        
          }
          console.log(res.value);
          return res.value;
        }
        )
        )
    );
  }


}