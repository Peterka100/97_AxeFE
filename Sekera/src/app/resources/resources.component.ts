import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  showResources: boolean;
  wood: number = this.wood;
  iron: number = this.iron;
  meat: number = this.wood;
  gold: number = this.iron;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

    this.showResources = Boolean(localStorage.getItem('loggedIn'))
    console.log(this.showResources);

    const idToken = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + idToken);

       if(idToken) {
      this.httpClient.get(`http://127.0.0.1:5000/users/resources/${user_id}`, {
        headers: headers}
      )
        .subscribe(
          (data: any) => {
            console.log(data);

            this.iron = data.user_resources.iron;
            this.wood = data.user_resources.wood;
            this.meat = data.user_resources.meat;
            this.gold = data.user_resources.gold;

          })
        }


  }


}

