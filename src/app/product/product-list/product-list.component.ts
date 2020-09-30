import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product.model';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public producten$: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.producten$ = this.productService.getProducts();
  }

}
