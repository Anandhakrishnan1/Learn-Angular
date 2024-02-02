import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CockpitComponent, ServerElementComponent],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'DataBinding';
  serverElements = [{type: 'server', name: 'Test server', content: 'Just a text...! '}];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    })
  }
}
