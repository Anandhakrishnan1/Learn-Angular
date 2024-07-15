import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
