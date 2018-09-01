import { Component, OnInit } from '@angular/core';
// { LoginComponent} from "../login/login.component";
import { HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  showResources: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const idToken = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    console.log('Token je: ' + idToken);
    console.log('User je: ' + user_id);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + idToken);

    // headers.set('Authorization', 'Bearer ' + idToken;


    if(idToken) {
      this.httpClient.get(`http://127.0.0.1:5000/users/resources/${user_id}`, {
        headers: headers}
        )
        .subscribe(
          (data: any) => {
            console.log(data);

            this.iron = data.user_resources.iron;
            this.wood = data.user_resources.wood;

            console.log(this.iron);
            console.log(this.wood);
    }


    if (idToken) {
     this.showResources = true;
    }
  }


}
