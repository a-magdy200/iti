import { Component } from '@angular/core';
import {Student} from "../../classes/student";
import {StudentService} from "../../services/student.service";

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
  constructor(private studentService: StudentService) {
  }


  public submit(event: Event): void {
    event.preventDefault();
    const newStudent = this.studentService.addNew({
      name: this.name, age: this.age, department_number: this.department_number, id: 0, isEditing: false
    });
    this.students.push(newStudent);
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
    this.studentService.save(student);
  }

  public edit(student: Student): void {
    this.studentService.edit(student);
  }

  public remove(student: Student): void {
    if (prompt("Are you sure you want to delete?(Yes/something else)") === 'Yes') {
      this.studentService.remove(student);
      this.students = this.studentService.getAllStudents();
    }
  }
}
