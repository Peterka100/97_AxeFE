import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {AuthService} from "../auth.service";
import {Router} from "@angular/router";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';



  constructor(private Auth: AuthService, private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  loginUser() {

    this.Auth.getUserDetails(this.username, this.password)
      .subscribe((data) => {

        console.log(data['token']); // data['token' je jenom jiný zápas data.token


        if (data['token']) {
          this.router.navigate(['/logged'])
          this.Auth.setLoggedIn(true)
          localStorage.setItem('token', data.token)
          localStorage.setItem('user_id', data.user_id.toString())

          } else {
          console.log('Nespravne credetial')
        }
      })
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

          })

          }
  }



















/*
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Router } from "@angular/router";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  //username: string = '';
  // password: string = '';
  // userCreated = false;
  // nickname: string;
  // user_id: number;

//constructor(private httpClient: HttpClient, private router: Router, private Auth: AuthService)
  constructor(private Auth: AuthService) {
  }

  ngOnInit() {
  }

  //--------------------------------------------------------------------------------------------

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password)
    console.log(username, password);
  }
}

  //--------------------------------------------------------------------------------------------


/*
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

