import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoggedComponent} from "./logged/logged.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth.guard";
import {MyNavComponent} from "./my-nav/my-nav.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'logged', component: LoggedComponent, canActivate: [AuthGuard] },
  { path: 'authorized', component: MyNavComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
