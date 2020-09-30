import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  public productForm: FormGroup;
  private productId: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Maak product form
    this.productForm = new FormGroup({
      naam: new FormControl(),
      beschrijving: new FormControl(),
      prijs: new FormControl()
    });

    // Als productId in route params, haal product op en initialiseer
    const productId = this.route.snapshot.params.productId;
    if (productId) {
      this.productId = productId;
      this.productService
        .getProductById(productId)
        .subscribe(product => this.productForm.patchValue(product));
    }
  }

  public handleSubmit() {
    if (this.isValid()) {
      const value = this.productForm.value;

      // productId bekend betekend wijzigen ipv toevoegen
      if (!!this.productId) {
        this.updateProduct(this.productId, value);
      } else {
        this.addProduct(value);
      }
    }
  }

  private addProduct(product: any) {
    this.productService
      .addProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(['products']));

  }

  private updateProduct(productId: number, product: any) {
    this.productService
      .updateProduct(productId, product)
      .subscribe(() => this.router.navigate(['products']));
  }

  // Form is valid zolang naam bekend is
  private isValid() {
    return !!this.productForm.get('naam').value;
  }
}
