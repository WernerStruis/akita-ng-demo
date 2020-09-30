import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Product} from './product.model';
import {ProductsApiService} from '../demo-api/products-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private productsApiService: ProductsApiService
  ) {}

  public getProducts(): Observable<Product[]> {
    return this.productsApiService.fetchProducts();
  }

  public getProductById(productId: number): Observable<Product> {
    return this.productsApiService.fetchProductById(productId);
  }

  public addProduct(data: any): Observable<void> {
    return this.productsApiService.addProduct({
     naam: data.naam || 'Unnamed',
      beschrijving: data.beschrijving || '',
      prijs: data.prijs || 0
    });
  }

  public updateProduct(productId: number, data: any): Observable<void> {
    return this.productsApiService.updateProduct(productId, {
      naam: data.naam || 'Unnamed',
      beschrijving: data.beschrijving || '',
      prijs: data.prijs || 0
    });
  }

}
