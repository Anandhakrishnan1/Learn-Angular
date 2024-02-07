import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from './game-control/game-control.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, GameControlComponent]
})
export class AppComponent {
  onIntervalFired($event: number) {
    console.log($event);
    if($event % 2 == 0){
      this.evenNumbers.push($event);
    }
    else
    {
      this.oddNumbers.push($event);
    }
  }
  title = 'Assignment4';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
}
