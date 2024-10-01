import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Student } from '../models/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.sass'
})
export class AddStudentComponent {
  student: Student = new Student()
  name: string = '';
  fees: number = 0;
  
  constructor (
    private dbService: DatabaseService, 
    private router: Router
  ) {}

  onAddStudent() {
    // Add the student
    this.dbService.addStudent(this.name, this.fees);
    // Redirect to list students
    this.router.navigate(['list-students'])
  }
}
