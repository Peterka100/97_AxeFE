import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from "../auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  HeaderLoggedIn: boolean;


  constructor(private router: Router, private Auth: AuthService) {}

  ngOnInit() {
    this.setHeaderLoggedIn();
  }


  setHeaderLoggedIn() {
    this.HeaderLoggedIn = Boolean(localStorage.getItem('loggedIn'))
    console.log(this.HeaderLoggedIn);
  }


  loginClick() {
    this.router.navigate(['/login']);

  }

  logoutClick() {
    this.router.navigate(['/home']);
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')

  }


}
