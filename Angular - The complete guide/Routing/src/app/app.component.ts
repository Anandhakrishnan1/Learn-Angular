import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, UsersComponent, ServersComponent, RouterLink, RouterLinkActive],
    providers: [CanDeactivateGuardService]
})
export class AppComponent {
  title = 'Routing';
}
