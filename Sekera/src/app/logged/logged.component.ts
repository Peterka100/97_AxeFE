import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  cardsOfUser = [];
  resources = [];
  resource;
  card_id;
  card_level;

  user_id;


  wood: number;
  iron: number;
  meat: number;
  gold: number;

  @Input() material;



  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

    console.log(this.material);

    const idToken = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");


    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + idToken);


    if (idToken) {
      this.httpClient.get(`http://127.0.0.1:5000/users/${localStorage.getItem('user_id')}`, {
          headers: headers
        }
      )
        .subscribe(
          (data: any) => {

            this.cardsOfUser = data.cardsOfUser;
            console.log(this.cardsOfUser);


            for (let i = 0; i < this.cardsOfUser.length; i++) {
              this.card_id = this.cardsOfUser[i].card_id.toString();
              this.card_level = this.cardsOfUser[i].card_level.toString();
              this.httpClient.get(`http://127.0.0.1:5000/cards/${this.card_id}/${this.card_level}`)
                .subscribe((rss: any) => {

                  this.resource = rss.card_details;
                  this.resources.push(this.resource)
                })
            }

          })


      this.httpClient.get(`http://127.0.0.1:5000/users/resources/${user_id}`, {
          headers: headers
        }
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
