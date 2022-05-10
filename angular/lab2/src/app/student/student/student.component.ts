import { Component } from '@angular/core';
import {Student} from "../../classes/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: Student[] = [];
  name = '';
  age = 0;
  department_number = 0;
  showDetails = false;
  lastId = 0;
  studentDetails = new Student(0,'',0,0);
  constructor() {
  }


  public submit(event: Event): void {
    event.preventDefault();
    this.students.push(new Student(++this.lastId, this.name, this.age, this.department_number));
    this.name = '';
    this.age = 0;
    this.department_number = 0;
  }
  public details(student: Student): void {
    this.studentDetails = student;
    this.showDetails = true;
  }
  public hideDetails(): void {
    this.showDetails = false;
  }

  public save(student: Student): void {
    student.isEditing = false;
  }

  public edit(student: Student): void {
    student.isEditing = true;
  }

  public remove(student: Student): void {
    if (prompt("Are you sure you want to delete?(Yes/something else)") === 'Yes') {
      const index = this.students.indexOf(student);
      this.students.splice(index, 1);
    }
  }
}
