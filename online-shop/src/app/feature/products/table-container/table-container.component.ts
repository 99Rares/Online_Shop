import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsData } from '../model/products.data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  products: ProductsData[] = [];

  constructor(
    private productService: ProductsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.loadProducts();
        //console.log('s-a sters cu succes produsul cu id: ' + id);
        this._snackBar.open('Product was successfully deleted');
      },
      (error) => this._snackBar.open(error)
    );
  }

  private loadProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
