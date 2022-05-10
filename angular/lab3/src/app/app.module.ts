import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowerTwoNumbersPipe } from './pipes/power-two-numbers.pipe';
import { SlugToTitlePipe } from './pipes/slug-to-title.pipe';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { ArraySlicePipe } from './pipes/array-slice.pipe';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerTwoNumbersPipe,
    SlugToTitlePipe,
    ArraySlicePipe,
    ImageDialogComponent,
    AddProductDialogComponent,
    DeleteProductDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
