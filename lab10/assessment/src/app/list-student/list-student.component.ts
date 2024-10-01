import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.sass'
})
export class ListStudentComponent implements OnInit {
  students: Student[] = [];

  constructor (private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.onListStudents();
  }

  onListStudents() {
    this.students = this.dbService.listStudents();
  }
}
