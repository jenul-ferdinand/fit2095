import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [],
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Fees</th>
        </tr>
      </thead> 
      @for (student of students; track $index) {
        <tr>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.fees }}</td>
        </tr>
      }
    </table>
  `,
  styleUrl: './list-students.component.sass'
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];  

  constructor (
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.apiService.getStudentsGET().subscribe(
      (students: any) => {
        console.log('Get Students:', students);
        this.students = students;
      }
    );
  }
}
