import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    servername = 'Testserver';
    serverCreated = false;
    servers = ['Testserver', 'Testserver2'];


  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.servername);
    this.serverCreationStatus = 'Server was created! Name is ' + this.servername;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.servername = (<HTMLInputElement>event.target).value;
  }
}
