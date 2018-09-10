import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import  {AuthService} from "./auth.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {LoggedComponent} from "./logged/logged.component";
import {CardComponent} from "./card/card.component";
import {AuthGuard} from "./auth.guard";
import {ResourcesComponent} from "./resources/resources.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoggedComponent,
    CardComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggedComponent } from './logged/logged.component';
import { ResourcesComponent } from './resources/resources.component';
import { AdminComponent } from './admin/admin.component';
import {AuthService} from "./auth.service";





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoggedComponent,
    LoginComponent,
    ResourcesComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/
