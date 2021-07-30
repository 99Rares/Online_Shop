import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-modal-dialog',
  templateUrl: './product-modal-dialog.component.html',
  styleUrls: ['./product-modal-dialog.component.scss'],
})
export class ProductModalDialogComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { id: number; primaryButton: string; admin: boolean },
    private service: ProductsService,
    public dialogRef: MatDialogRef<ProductModalDialogComponent>
  ) {}

  ngOnInit(): void {
    //console.log(this.data.id);
    this.service.getProductDetail(this.data.id).subscribe((result) => {
      this.productForm.patchValue(result);
      if (!this.data.admin) {
        // console.log(!this.data.admin);
        this.productForm.disable();
      }
    });
  }

  updateProduct() {
    this.dialogRef.close(this.productForm.value);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getButtonName() {
    return this.data.primaryButton;
  }
}
