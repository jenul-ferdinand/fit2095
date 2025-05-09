import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  protected students: Student[] = []

  constructor() { }

  addStudent(name: string, fees: number) : void {
    let student : Student = new Student ()

    student.name = name;
    student.fees = fees;
    student.id = student.id; // ID is auto-generated by model

    this.students.push(student);
  }

  deleteStudent(id: number) : void {
    this.students = this.students.filter(student => student.id !== id);
    console.log(this.students);
  }

  listStudents() : Student[] {
    console.log(this.students);
    return this.students;
  }
}
