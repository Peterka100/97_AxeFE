import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@Injectable()
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
  }

  onPasswordKeyUp(event: any) {
    this.password = event.target.value;
  }

  postSignup() {
    if (this.username != '' && this.password != '')
      this.httpClient.post(`http://127.0.0.1:5000/auth/signup/`, {
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
   return this.httpClient.post(`http://localhost:5000/auth/login`, {
      "username": this.username,
      "password": this.password
    })

  }



      /*
      .subscribe(
        (data: any) => {
          console.log(data);

                    this.user_id = data.user_id;
                    this.token = data.token;


                    if (this.user_id = null) {
                      console.log('Uzivatel neexistuje');
                    } else {

                      this.loginClick(data);
                    }

                    this.setSession(data);

                  })

            }


            loginClick(data) {
              this.router.navigate(['/logged']);

            }

            private setSession(data) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('user_id', data.user_id);
            }



  }

*/
