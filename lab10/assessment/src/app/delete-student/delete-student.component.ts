import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.sass'
})
export class DeleteStudentComponent implements OnInit {
  students: Student[] = []

  constructor (
    private dbService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.onListStudents();
  }

  onListStudents() {
    this.students = this.dbService.listStudents();
  }

  onDeleteStudent(id: number) {
    this.dbService.deleteStudent(id);
    this.router.navigate(['list-students'])
  }
}
