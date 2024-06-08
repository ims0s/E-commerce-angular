import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './HomePage.component';
import { TitlePipe } from 'src/core/pipes/title.pipe';
import { ProductComponent } from './Product/Product.component';
import { HomePageRouteRoutes } from './HomePageRoute.routing';

@NgModule({
  imports: [
    CommonModule,
    HomePageRouteRoutes
  ],
  declarations: [HomePageComponent,TitlePipe,ProductComponent]
})
export class HomePageModule { }
