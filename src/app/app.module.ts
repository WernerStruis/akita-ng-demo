import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from './product/product.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
