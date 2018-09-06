import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

interface myData {
  user_id: number;
  token: string;
  role: string;
}

@Injectable()
export class AuthService {

  private loggedInStatus = false;

  constructor(private httpClient: HttpClient) {}

  setLoggedIn (value: boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username, password){
    // [pst these details to API server and return user info, is info is correct
    return this.httpClient.post<myData>('http://localhost:5000/auth/login', {
      username,
      password
    })
  }

}

