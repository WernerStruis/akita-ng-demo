import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Product} from './product.model';
import {ProductsApiService} from '../demo-api/products-api.service';
import {mapTo, switchMap, tap} from 'rxjs/operators';
import {ProductStore} from './store/product.store';
import {ProductQuery} from './store/product.query';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private productsApiService: ProductsApiService,
    private productStore: ProductStore,
    private productQuery: ProductQuery
  ) {
  }

  public getProducts(): Observable<Product[]> {
    return this.productsApiService.fetchProducts()
      .pipe(tap(products => this.productStore.set(products)));
  }

  // Vervangen door productQuery.selectEntity(productId)
  // public getProductById(productId: number): Observable<Product> {
  //   return this.productsApiService.fetchProductById(productId);
  // }

  public addProduct(data: any): Observable<void> {
    return this.productsApiService
      .addProduct({
        naam: data.naam || 'Unnamed',
        beschrijving: data.beschrijving || '',
        prijs: data.prijs || 0
      })
      .pipe(
        switchMap(() => this.getProducts()),
        mapTo(undefined)
      );
  }

  public updateProduct(productId: number, data: any): Observable<void> {
    return this.productsApiService
      .updateProduct(productId, {
        naam: data.naam || 'Unnamed',
        beschrijving: data.beschrijving || '',
        prijs: data.prijs || 0
      })
      .pipe(
        switchMap(() => this.getProducts()),
        mapTo(undefined)
      );
  }

}
