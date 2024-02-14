import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { OddHighlightDirective } from './odd-highlight/odd-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicHighlightDirective, OddHighlightDirective, UnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directive';
  onlyOdd = false;
  oddNumbers = [1,3,5];
  evenNumbers = [2,4,6];
  value = 10;
}
