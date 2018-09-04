import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { LoginComponent } from "../login/login.component";


@Injectable()
export class AuthService {
  Iusername: string = this.loginComponent.username;
  Ipassword: string = this.loginComponent.password;
  token: string;
  user_id: number;


  constructor(private httpClient: HttpClient, private loginComponent: LoginComponent) {}



  postLogin() {
    return this.httpClient.post(`http://localhost:5000/auth/login`, {
        "username": this.Iusername,
        "password": this.Ipassword
      })
    }
}

