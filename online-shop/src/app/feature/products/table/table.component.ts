import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsData } from '../model/products.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: ProductsData[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'delete'];

  constructor() {}

  //primeste un id si il da mai sus, catre parinte
  deleteProduct(id: number): void {
    this.delete.emit(id);
  }
}
