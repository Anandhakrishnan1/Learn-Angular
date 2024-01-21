import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  //selector: '.app-server',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
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
