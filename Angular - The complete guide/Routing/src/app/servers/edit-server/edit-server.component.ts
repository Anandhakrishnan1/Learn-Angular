import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}