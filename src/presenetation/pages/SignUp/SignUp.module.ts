import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './SignUp.component';
import { SignUpRoutes } from './signUp.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutes,
    ReactiveFormsModule,
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
