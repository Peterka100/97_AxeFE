import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  loggeddUser: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

      const idToken = localStorage.getItem("token");
      if (idToken) {
        this.loggeddUser = true;
      }




  }

  loginClick(){
      this.router.navigate(['/login']);
    }

  logoutClick(){
    this.router.navigate(['/home']);
    localStorage.removeItem("token");

  }

}
