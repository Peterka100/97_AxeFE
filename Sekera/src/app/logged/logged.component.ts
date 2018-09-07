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
  card_id;
  card_level;
  next_iron;
  next_wood;
  parentMessage = "message from parent";

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
            console.log(data);

            this.cardsOfUser = data.cardsOfUser;
            console.log(this.cardsOfUser);

            for(let i=0; i<this.cardsOfUser.length; i++) {
              this.card_id  =  this.cardsOfUser[i].card_id.toString();
              this.card_level = this.cardsOfUser[i].card_level.toString();
              this.httpClient.get(`http://127.0.0.1:5000/cards/${this.card_id}/${this.card_level}`)
                .subscribe((rss: any) => {

                  this.resources = rss.card_details;
                  console.log(this.resources);
                     this.next_iron = rss.card_details.iron;
                     this.next_wood = rss.card_details.wood;
                    // console.log(this.next_iron);
                    // console.log(this.next_wood);
                })
            }
          })
    }

    console.log(this.data);

  }

}
