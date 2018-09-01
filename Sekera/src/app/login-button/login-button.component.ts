import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  user_id: number;
  loggeddUser: boolean;


  constructor(private router: Router) { }

  ngOnInit() {
    const idToken = localStorage.getItem("token");
    if(idToken){
      this.loggeddUser = true;
    }
  }

  loginClick(){
    this.router.navigate(['/login']);
  }
}
