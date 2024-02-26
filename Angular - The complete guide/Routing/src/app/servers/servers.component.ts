import { Component } from '@angular/core';
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ServerComponent } from "./server/server.component";
import { CommonModule } from '@angular/common';
import { ServersService } from './servers.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-servers',
    standalone: true,
    templateUrl: './servers.component.html',
    styleUrl: './servers.component.css',
    imports: [EditServerComponent, ServerComponent, CommonModule, RouterLink]
})
export class ServersComponent {
    public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
