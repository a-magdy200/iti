import { Injectable } from '@angular/core';
import {Student} from "../classes/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  lastId = 0;
  constructor() { }
  public addNew({name, age, department_number}: Student): Student {
    this.students.push(new Student(++this.lastId, name, age, department_number));
    return this.students[this.students.length - 1];
  }

  public save(student: Student): void {
    student.isEditing = false;
  }

  public edit(student: Student): void {
    student.isEditing = true;
  }

  public remove(student: Student): void {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  public getAllStudents(): Student[] {
    return this.students;
  }
}
