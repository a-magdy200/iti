import { Component, OnInit } from '@angular/core';
import {Department} from "../../classes/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments: Department[] = [];
  departmentDetails: Department = new Department(0, '','');
  name = '';
  location = '';
  lastId = 0;
  showDetails = false;
  constructor() {
  }

  public submit(event: Event): void {
    event.preventDefault();
    this.departments.push(new Department(++this.lastId, this.name, this.location));
    this.name = '';
    this.location = '';
  }

  public details(department: Department): void {
    this.departmentDetails = department;
    this.showDetails = true;
  }
  public hideDetails(): void {
    this.showDetails = false;
  }

  public save(department: Department): void {
    department.isEditing = false;
  }

  public edit(department: Department): void {
    department.isEditing = true;
  }

  public remove(department: Department): void {
    if (prompt("Are you sure you want to delete?(Yes/something else)") === 'Yes') {
      const index = this.departments.indexOf(department);
      this.departments.splice(index, 1);
    }
  }

}
