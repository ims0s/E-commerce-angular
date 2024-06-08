import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , redirectTo:"/home",pathMatch:'full'},
  {path : 'home' , loadChildren: ()=> import('../presenetation/pages/HomePage/HomePage.module').then(m=>m.HomePageModule)},
  {path : 'product-details/:productId' , loadChildren: ()=> import('../presenetation/pages/ProductDetailsPage/ProductDetailsPage.module').then(m=>m.ProductDetailsPageModule)},
  {path : 'whishlist' , loadChildren: ()=> import('../presenetation/pages/HomePage/HomePage.module').then(m=>m.HomePageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
