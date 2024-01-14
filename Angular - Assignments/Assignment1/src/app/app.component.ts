import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
updateTextVisibility() {
  this.isTextVisible = true;
}
updateButtonName($event: Event) {
  this.buttonName = (<HTMLInputElement>$event.target).value;
}
buttonName = 'Click Here....!' 
isTextVisible = false
title = 'Assignment1';
}
