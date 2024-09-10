import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school';
  
  // List of students
  students : Student[] = [];

  // Create a student
  student = new Student();

  // Function to add student
  addStudent() {
    this.students.push(this.student);
    this.student = new Student();
  }
}

class Student {
  id: string;
  name: string;
  addr: string;
  dob: number;

  constructor () {
    this.id = uuidv4();
    this.name = '';
    this.addr = '';
    this.dob = 2024;
  }
}
