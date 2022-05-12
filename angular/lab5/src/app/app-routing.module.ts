import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student/student/student.component";
import {DepartmentComponent} from "./department/department/department.component";

const routes: Routes = [
  {
    path: "students", component: StudentComponent,
  },
  {
    path: "departments", component: DepartmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
