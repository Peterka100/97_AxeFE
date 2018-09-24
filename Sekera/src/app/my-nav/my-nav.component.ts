import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  user_id;
  wood: number;
  iron: number;
  meat: number;
  gold: number;

  resources = [];







  constructor(private httpClient: HttpClient) {}


  UpdateMyResources(){

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + localStorage.getItem("token"));

    this.httpClient.get(`http://127.0.0.1:5000/users/resources/${this.user_id}`, {
        headers: headers
      }
    )
      .subscribe(
        (data: any) => {
          console.log(data);

          this.resources = data.user_resources;
          console.log(this.resources);

          this.iron = data.user_resources.iron;
          this.wood = data.user_resources.wood;
          this.meat = data.user_resources.meat;
          this.gold = data.user_resources.gold;

        })

  }




//Po kliku na tlačítko se zavolá táto funkce. je ale potřeba přidat to časování.
AddGold() {
  const idToken = localStorage.getItem("token");
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers = headers.set('authorization', 'Bearer ' + idToken);

  this.user_id = localStorage.getItem('user_id')

  this.httpClient.put('http://127.0.0.1:5000/users/AddRSStoUser', {
      "user_id": this.user_id,
      "resource": 'gold',
      "value": 10000
    }, {
      headers: headers
    }
  )
    .subscribe(
      (data: any) => {}
    )
  this.UpdateMyResources();
}



AddWood() {
  const idToken = localStorage.getItem("token");
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers = headers.set('authorization', 'Bearer ' + idToken);

  this.user_id = localStorage.getItem('user_id')

  this.httpClient.put('http://127.0.0.1:5000/users/AddRSStoUser', {
      "user_id": this.user_id,
      "resource": 'wood',
      "value": 10000
    }, {
      headers: headers
    }
  )
    .subscribe(
      (data: any) => {}
    )
  this.UpdateMyResources();
}


AddMeat() {
  const idToken = localStorage.getItem("token");
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers = headers.set('authorization', 'Bearer ' + idToken);

  this.user_id = localStorage.getItem('user_id')

  this.httpClient.put('http://127.0.0.1:5000/users/AddRSStoUser', {
      "user_id": this.user_id,
      "resource": 'meat',
      "value": 10000
    }, {
      headers: headers
    }
  )
    .subscribe(
      (data: any) =>{}
    )
  this.UpdateMyResources();
}


AddIron() {
  const idToken = localStorage.getItem("token");
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers = headers.set('authorization', 'Bearer ' + idToken);

  this.user_id = localStorage.getItem('user_id')

  this.httpClient.put('http://127.0.0.1:5000/users/AddRSStoUser', {
      "user_id": this.user_id,
      "resource": 'iron',
      "value": 10000
    }, {
      headers: headers
    }
  )
    .subscribe(
      (data: any) => {}
    )
  this.UpdateMyResources();
}

}

