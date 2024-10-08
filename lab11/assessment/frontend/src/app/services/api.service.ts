import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8080';

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  // POST Add Student 
  addStudentPOST(name: string, age: number, fees: number) {
    return this.http.post(`${this.url}/api/students`, {name, age, fees});
  }

  // GET List Student
  getStudentsGET() {
    return this.http.get(`${this.url}/api/students`);
  }
}
