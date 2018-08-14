import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { FoldersService } from './folders/folders.service';
import { HttpService } from './shared/http.service';


@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    AuthService,
    FoldersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
