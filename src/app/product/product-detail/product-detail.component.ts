import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';
import {Observable} from 'rxjs';
import {ProductService} from '../product.service';
import {tap} from 'rxjs/operators';
import {ProductQuery} from '../store/product.query';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productQuery: ProductQuery
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.productId;
    this.product$ = this.productQuery.selectEntity(productId);
  }

}
