import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';


  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
  }

  onUsernameKeyUp(event:any) {
    this.username = event.target.value;
    console.log(this.username)
  }

  onPasswordKeyUp(event:any) {
    this.password = event.target.value;
  }

  postSignup() {
    this.httpClient.post(`http://127.0.0.1:5000/auth/signup`, {
      "username": this.username,
      "password": this.password
    })
      .subscribe(
        (data:any) => {
          console.log(data);

        }
  }


  postLogin(){

  }

}
