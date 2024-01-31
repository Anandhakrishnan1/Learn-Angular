import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CockpitComponent, ServerElementComponent]
})
export class AppComponent {
  title = 'DataBinding';
  serverElements = [{type: 'server', name: 'Test server', content: 'Just a text...! '}];
}
