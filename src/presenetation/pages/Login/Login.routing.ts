import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login.component';

const routes: Routes = [
  { path:"" , component:LoginComponent },
];

export const LoginRoutes = RouterModule.forChild(routes);
