import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsData } from './model/products.data';
import { BackendService } from '../../backend/backend.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api = 'http://localhost:3000';
  productsEndpoint = 'products';

  constructor(private service: BackendService) {}

  getProducts(): Observable<ProductsData[]> {
    return this.service.get(`${this.api}/${this.productsEndpoint}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.service.delete(`${this.api}/${this.productsEndpoint}/${id}`);
  }
}
