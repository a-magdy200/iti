import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import {FormsModule} from "@angular/forms";
import {StudentRoutingModule} from "./student-routing.module";



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
