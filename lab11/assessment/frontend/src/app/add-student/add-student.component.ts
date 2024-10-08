import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Student } from '../models/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.sass'
})
export class AddStudentComponent {
  student = new Student();

  constructor (
    private apiService: ApiService,
    private router: Router
  ) { }

  addStudent() {
    this.apiService.addStudentPOST(this.student.name, this.student.age, this.student.fees).subscribe(
      (data: any) => {
        this.router.navigate(['/list'])
      }
    );

    this.student = new Student();
  }
}
