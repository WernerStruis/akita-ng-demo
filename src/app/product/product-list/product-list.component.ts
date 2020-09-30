import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {ProductQuery} from '../store/product.query';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public producten$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private productQuery: ProductQuery
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
    this.producten$ = this.productQuery.products$;
  }

}
