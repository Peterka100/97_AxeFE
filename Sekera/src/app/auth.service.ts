import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  getUserDetails(username, password){
    // [pst these details to API server and return user info, is info is correct
    return this.httpClient.post('http://localhost:5000/auth/login', {
      username,
      password
    }).subscribe((data) => {
      console.log(data, "is what we got from server")
    }
    )
  }

}

