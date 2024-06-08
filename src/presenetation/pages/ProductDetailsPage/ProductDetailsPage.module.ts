import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsPageComponent } from './ProductDetailsPage.component';
import { ProductDetialsRoutesRoutes } from './ProductDetialsRoutes.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductDetialsRoutesRoutes,
  ],
  declarations: [ProductDetailsPageComponent ]
})
export class ProductDetailsPageModule { }
