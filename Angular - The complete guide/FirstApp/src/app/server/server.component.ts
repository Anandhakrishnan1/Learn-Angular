import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  //selector: '.app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
onUpdateServerName($event: Event) {
this.serverName = (<HTMLInputElement>$event.target).value;
}
activateUpdateServerNameField() {
  this.allowUpdateServerName = true
}
activateServer() {
  this.serverStatus = "Active"
}
  serveraId = 1
  serverName = "Development"
  serverStatus = "Offline"
  allowActivateServer = false
  allowUpdateServerName = false
  constructor(){
    setTimeout(() => {
      this.allowActivateServer = true
    },3000)
  }
}
