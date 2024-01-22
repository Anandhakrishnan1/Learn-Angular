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
click() {
  this.isTextvisible = !this.isTextvisible;
  this.clickCount =  this.clickCount + 1
  this.clickList.push(this.clickCount);
}
  title = 'Assignment3';
  isTextvisible = false
  clickCount = 0
  clickList = Array<number>() 
}
