import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login.component';
import { LoginRoutes } from './Login.routing';
import { TitlePipe } from 'src/core/title.pipe';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
