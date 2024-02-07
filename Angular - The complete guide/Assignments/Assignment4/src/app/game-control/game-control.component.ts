import { Component, EventEmitter, Output } from '@angular/core';
import { OddComponent } from "../odd/odd.component";

@Component({
    selector: 'app-game-control',
    standalone: true,
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.css',
    imports: [OddComponent]
})
export class GameControlComponent {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber ++;
    }, 1000);
  }

  onPauseGame() {
    this.interval = clearInterval(this.interval);
  }
}
