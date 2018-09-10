import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() childResources;

  @Input() childwood;
  @Input() childiron;
  @Input() childlevel;



  Iwood: string;
  Iiron: string;
  Ilevel: string;




  constructor() { }




  ngOnInit() {

    console.log(this.childResources);
    this.Ilevel = this.childResources.card_level;
    this.Iiron = this.childResources.iron;
    this.Iwood = this.childResources.wood;



    // this.Ilevel = this.childCardsOfUser.card_level;


  }

}
