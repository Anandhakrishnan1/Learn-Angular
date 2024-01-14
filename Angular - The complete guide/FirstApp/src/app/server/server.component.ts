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
  serveraId = 1
  serverName = "Development"
}
