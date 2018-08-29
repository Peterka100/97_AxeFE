import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";



import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoggedComponent } from './logged/logged.component';
import { HeaderUserComponent } from './header-user/header-user.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LoginButtonComponent,
    LoggedComponent,
    HeaderUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
