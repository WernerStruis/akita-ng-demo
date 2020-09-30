import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, mapTo} from 'rxjs/operators';

import {Product} from '../product/product.model';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
  private products: Product[] = [];

  constructor() {
    this.mockProducts();
  }

  public fetchProducts(): Observable<Product[]> {
    return of(this.products);
  }

  public fetchProductById(productId: number): Observable<Product> {
    // Geen idee waarom die niet zonder string casting wilt werken, waarschijnlijk een typing ding
    return of(this.products.find(p => p.id.toString() === productId.toString()));
  }

  public addProduct(data: any): Observable<void> {
    return of(
      this.products.push({
        id: this.products.length + 1,
        naam: data.naam,
        beschrijving: data.beschrijving,
        prijs: data.prijs
      })
    ).pipe(mapTo(undefined));
  }

  public updateProduct(productId: number, data: any): Observable<void> {
    const productIndex = this.products.findIndex(p => p.id.toString() === productId.toString());
    this.products[productIndex] = { id: productId, ...data };
    return of(undefined);
  }

  private mockProducts(): void {
      this.products.push(this.maakMockPizza('margarita'));
      this.products.push(this.maakMockPizza('tonno'));
      this.products.push(this.maakMockPizza('kaas'));
      this.products.push(this.maakMockPizza('ham'));
      this.products.push(this.maakMockPizza('salami'));
      this.products.push(this.maakMockPizza('calzone'));
  }

  private maakMockPizza(type: string): Product {
    return ({
      id: this.products.length,
      naam: `Pizza ${type}`,
      beschrijving: `Pizza met ${type}`,
      prijs: 100
    });
  }
}
