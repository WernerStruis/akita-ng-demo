import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Product} from '../product.model';

// ProductState definieert hoe de state eruit ziet
// -- het param number geeft het type van jouw entity key aan
export interface ProductState extends EntityState<Product, number> {}

// ProductStore is de store (duh)
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super();
  }
}
