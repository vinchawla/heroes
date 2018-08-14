import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders/folders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'folders', component: FoldersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
