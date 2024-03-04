import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanComponentDeactivate } from '../../can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> 
  {
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name) || (this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard the changes ?');
    }
    else{
      return true;
    }
  }
}