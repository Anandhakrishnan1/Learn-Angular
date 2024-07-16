import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { StudentService } from '../../../public/assets/dummyData/student.service';

@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [DashboardComponent
          , CommonModule
          , MatCardModule
          , MatTableModule
          , MatListModule],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.scss'
})
export class ManageStudentComponent implements OnInit {
  students = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'name', 'school', 'phone', 'email', 'country', 'status'];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students.data = this.studentService.getStudents()
  }

}
