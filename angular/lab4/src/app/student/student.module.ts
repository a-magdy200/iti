import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
