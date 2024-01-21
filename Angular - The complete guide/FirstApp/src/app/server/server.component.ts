import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  //selector: '.app-server',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
getColor(): any {
  if(this.serverStatus === 'Active'){
    return 'green'
  }
  else
    return 'red'
}
activateUpdateServerNameField() {
  this.allowUpdateServerName = true
  this.isServerNameUpdated = true
}
activateServer() {
  this.serverStatus = "Active"
}
  serveraId = 1
  serverName = "Development"
  serverStatus = "Offline"
  allowActivateServer = false
  allowUpdateServerName = false
  isServerNameUpdated = false
  constructor(){
    setTimeout(() => {
      this.allowActivateServer = true
    },3000)
  }
}
