import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent} from "../login/login.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  logged: boolean;
  loggeddUser: boolean;


  constructor(private router: Router, private Auth: LoginComponent) {}

  ngOnInit() {
      this.getToken();

      const idToken = localStorage.getItem("token");
      if(idToken) {
        this.loggeddUser = true;
      } else {
        this.loggeddUser = false;
      }
  }

  loginClick(){
      this.router.navigate(['/login']);
    }

  logoutClick(){
    this.router.navigate(['/home']);
    localStorage.removeItem("token");
    this.ngOnInit();

  }

  getToken(){
    this.Auth.postLogin()
      .subscribe(
        (data: any) => {
          console.log("Login " + data);
      })
  }


}
