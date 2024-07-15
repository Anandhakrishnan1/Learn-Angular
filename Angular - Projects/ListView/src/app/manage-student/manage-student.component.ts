import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.scss'
})
export class ManageStudentComponent {

}
