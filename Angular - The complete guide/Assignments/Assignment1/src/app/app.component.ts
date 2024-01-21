import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, WarningAlertComponent, SuccessAlertComponent]
})
export class AppComponent {
  title = 'Assignment1';
}
