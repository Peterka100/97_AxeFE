import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import {HttpHeaders} from "@angular/common/http";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  StoreToken = localStorage.getItem("token");


  constructor(private login: LoginComponent, private httpClient: HttpClient) {
  }

  ngOnInit() {
  }


/*
userResources(){
    console.log(this.StoreToken);
  this.httpClient.get(`http://127.0.0.1:5000/users/resources/${this.login.user_id}`, {
    headers: new HttpHeaders().set('Authorization', this.StoreToken)
  })
    .subscribe(
      (resources: any) => {
        console.log(resources);

      })
}
*/


}
