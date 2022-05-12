import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import {FormsModule} from "@angular/forms";
import {DepartmentRoutingModule} from "./DepartmentRoutingModule";



@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DepartmentRoutingModule
  ],
  exports: [
    DepartmentComponent
  ]
})
export class DepartmentModule { }
