import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductFormComponent} from './product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: ProductFormComponent
      },
      {
        path: ':productId',
        children: [
          {
            path: '',
            component: ProductDetailComponent,
            pathMatch: 'full'
          },
          {
            path: 'edit',
            component: ProductFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
