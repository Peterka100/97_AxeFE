import { Component, OnInit } from '@angular/core';
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



  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const idToken = localStorage.getItem("token");


    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + idToken);


    if(idToken) {
      this.httpClient.get(`http://127.0.0.1:5000/users/${localStorage.getItem('user_id')}`, {
        headers: headers}
      )
        .subscribe(
          (data: any) => {

            this.cardsOfUser = data.cardsOfUser;
            console.log(this.cardsOfUser);



            for(let i=0; i<this.cardsOfUser.length; i++) {
              this.card_id  =  this.cardsOfUser[i].card_id.toString();
              this.card_level = this.cardsOfUser[i].card_level.toString();
              this.httpClient.get(`http://127.0.0.1:5000/cards/${this.card_id}/${this.card_level}`)
                .subscribe((rss: any) => {

                  this.resource = rss.card_details;
                  this.resources.push(this.resource)

                })
            }

          })

    }
  }


  //Po kliku na tlačítko se zavolá táto funkce. je ale potřeba přidat to časování.
  AddResources(resource){
    this.httpClient.put('127.0.0.1:5000/users/AddRSStoUser',{
      "user_id": localStorage.getItem('user_id'),
      "resource": resource,
      "value": 10000
    })
  }


}
