import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../interfaces/product";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent{
  product: Product = {
    id: 0,
    name: '',
    image: '',
    code: '',
    available: new Date(),
    price: 0,
    rating: 0
  }
  date = new FormControl(new Date());
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
    this.product = {...data};
  }
  public isDisabled(): boolean {
    return this.product.name.length < 3 || this.product.image.length < 3 || this.product.price === 0;
  }

}
