import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() childMessage: string;

  @Input() childCardsOfUser;

  @Input() childwood;
  @Input() childiron;
  @Input() childlevel;



  constructor() { }




  ngOnInit() {
    console.log(this.childCardsOfUser);
  }

}
