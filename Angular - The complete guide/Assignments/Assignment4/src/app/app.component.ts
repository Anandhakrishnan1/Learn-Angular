import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from "./odd/odd.component";
import { EvenComponent } from "./even/even.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, GameControlComponent, OddComponent, EvenComponent]
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
