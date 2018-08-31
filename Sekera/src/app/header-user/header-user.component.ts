import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  user_id: number;


  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  logoutClick() {
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
  }

getUserResource() {
  this.httpClient.post(`http://127.0.0.1:5000/users/resources/${this.user_id}`, {

  })
}

}
