import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './HomePage.component';

const routes: Routes = [
  { path:"",component:HomePageComponent },
];

export const HomePageRouteRoutes = RouterModule.forChild(routes);
