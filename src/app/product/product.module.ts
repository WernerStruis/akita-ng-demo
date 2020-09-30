import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent
  ]
})
export class ProductModule {}
