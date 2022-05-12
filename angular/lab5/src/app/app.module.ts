import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {StudentModule} from "./student/student.module";
import {DepartmentModule} from "./department/department.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
