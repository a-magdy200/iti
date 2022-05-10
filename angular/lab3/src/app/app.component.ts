import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Product} from "./interfaces/product";
import {MatDialog} from "@angular/material/dialog";
import {ImageDialogComponent} from "./image-dialog/image-dialog.component";
import {AddProductDialogComponent} from "./add-product-dialog/add-product-dialog.component";
import {DeleteProductDialogComponent} from "./delete-product-dialog/delete-product-dialog.component";

const DUMMY_PRODUCT = {
  id: 0,
  name: '',
  image: '',
  code: '',
  available: new Date(),
  price: 0,
  rating: 0
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.products);
  displayedColumns = ['image', 'name', 'code', 'available', 'price', 'rating', 'actions'];
  searchValue = '';
  dummyProduct = DUMMY_PRODUCT;
  constructor(public dialog: MatDialog) {}
  public fakeArray(count: number): number[] {
    return Array(count).fill(0);
  }
  public openCreateProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      data: product
    })
    dialogRef.afterClosed().subscribe((result: Product) => {
      if (result) {
        result.code = result.name.replace(/ /g, '-');
        result.rating = parseInt(result.rating.toString(), 10);
        if (result.id === 0) {
          result.id = this.products.length + 1;
          this.products.push(result);
        } else {
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === result.id) {
              this.products[i] = {
                ...result
              };
              break;
            }
          }
        }
        this.dataSource.data = this.products;
      }
    });
  }
  public openDeleteConfirmDialog(product: Product): void {
    const dialogRef = this.dialog.open(DeleteProductDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            this.products.splice(i, 1);
            break;
          }
        }
        this.dataSource.data = this.products;
      }
    });
  }
  public filterData(): void {
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
  }
  public openImageDialog(image: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: image,
    });
  }
}
