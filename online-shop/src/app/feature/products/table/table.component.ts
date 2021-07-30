import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsData } from '../model/products.data';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalDialogComponent } from '../product-modal-dialog/product-modal-dialog.component';
import { ProductDetailData } from '../model/product.detail.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: ProductsData[] = [];
  @Input() isAdmin: boolean = true;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() updatedProduct: EventEmitter<ProductDetailData> =
    new EventEmitter<ProductDetailData>();
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'delete'];

  constructor(public dialog: MatDialog) {}

  dialogRef: any;

  //primeste un id si il da mai sus, catre parinte
  deleteProduct(id: number): void {
    this.delete.emit(id);
  }

  openModalDialog(id: number) {
    //console.log('open Modal');
    const dialogRef = this.dialog.open(ProductModalDialogComponent, {
      width: '50%',
      height: '75%',
      data: { id, primaryButton: 'Update', admin: this.isAdmin }, //{id: id}
    });

    dialogRef.afterClosed().subscribe((data: ProductDetailData) => {
      if (data) this.updatedProduct.emit(data);
    });
  }
}
