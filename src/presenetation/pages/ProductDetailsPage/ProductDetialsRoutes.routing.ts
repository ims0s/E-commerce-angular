import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsPageComponent } from './ProductDetailsPage.component';

const routes: Routes = [
  { path:'' , component: ProductDetailsPageComponent },
];

export const ProductDetialsRoutesRoutes = RouterModule.forChild(routes);
