import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const idToken = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + idToken);


    if(idToken) {
      this.httpClient.get(`http://127.0.0.1:5000/users/${user_id}`, {
        headers: headers}
      )
        .subscribe(
          (data: any) => {
            console.log(data);
          })
    }

  }
}
