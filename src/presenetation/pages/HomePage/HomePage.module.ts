import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './HomePage.component';
import { TitlePipe } from 'src/core/title.pipe';
import { ProductComponent } from './Product/Product.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [HomePageComponent,TitlePipe,ProductComponent]
})
export class HomePageModule { }
