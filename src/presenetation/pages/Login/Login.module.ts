import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login.component';
import { LoginRoutes } from './Login.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
