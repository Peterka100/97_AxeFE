 import { Component } from '@angular/core';
 import { HttpClient} from "@angular/common/http";

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name: string = '';
 found: boolean;

   constructor(private httpClient: HttpClient){}

  onNameKeyUp(event:any) {
    this.name = event.target.value;
    this.found = false;
  }













  /*
   getProfile(){
    console.log(this.name);
    this.httpClient.get(`http://127.0.0.1:5000/cards/3/${this.name}`)
      .subscribe(
        (data:any = []) => {
          //nepoužívame data.length, protože je to objekt , ne array
          if(Object.keys(data).length) {
            this.found = true;
            this.iron = data.card_details.iron;
            this.wood = data.card_details.wood;
            console.log(this.iron);
            console.log(this.wood);

          }
        })
   }

   postProfile(){
     console.log(this.name);
     this.httpClient.post(`http://127.0.0.1:5000/cards/insert`, {
       "user_id": 50,
       "card_id": 3,
       "card_level": 7
     })
       .subscribe(
         (data:any ) => {
             console.log(data);

           }
         })
    }
*/


 }
