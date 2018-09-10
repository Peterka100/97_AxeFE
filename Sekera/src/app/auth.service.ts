import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

interface myData {
  user_id: number;
  token: string;
  role: string;
  message: string;
}

@Injectable()
export class AuthService {


  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(private httpClient: HttpClient) {}

  setLoggedIn (value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true')
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')  || this.loggedInStatus.toString())
  }

  getUserDetails(username, password){
    // post these details to API server and return user info, is info is correct
    return this.httpClient.post<myData>('http://localhost:5000/auth/login', {
      username,
      password
    })
  }
/*
  postSignup(username, password) {
    // post these information to API server to register user
    if (this.username != '' && this.password != '')
       return this.httpClient.post(`http://127.0.0.1:5000/auth/signup/`, {
        username,
        password
      })

  }
*/
}

