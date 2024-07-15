import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';

export const routes: Routes = [
    {
        path: '',
        component : DashboardComponent
    },
    {
        path: 'student',
        component : ManageStudentComponent
    }
];
