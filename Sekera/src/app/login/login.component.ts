import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  userCreated = false;
  nickname: string;
  user_id: number;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  onUsernameKeyUp(event: any) {
    this.username = event.target.value;
    console.log(this.username)
  }

  onPasswordKeyUp(event: any) {
    this.password = event.target.value;
  }

  postSignup() {
    if (this.username != '' && this.password != '')
      this.httpClient.post(`http://127.0.0.1:5000/auth/signup`, {
        "username": this.username,
        "password": this.password
      })
        .subscribe(
          (data: any) => {
            console.log(data);

            this.nickname = data.user.nickname;

            if (this.nickname != '') {
              console.log(this.nickname);
              this.userCreated = true;
            }
          })
  }


  postLogin() {
    this.httpClient.post(`http://localhost:5000/auth/login`, {
      "username": this.username,
      "password": this.password
    })
      .subscribe(
        (data: any) => {
          console.log(data);

          this.user_id = data.user_id;
          console.log(this.user_id);

          if (this.user_id = null) {
            console.log('Uzivatel neexistuje');
          } else {
              this.loginClick();
            }
        })

  }

  loginClick() {
    this.router.navigate(['/logged']);
  }
}
