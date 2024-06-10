import { Injectable } from '@angular/core';
import { UserModel } from 'src/data/datasource/data_model/Auth_model';
import { IAuth_Service } from '../interfaces/IAuth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends IAuth_Service {
override user: UserModel|null=JSON.parse(window.localStorage.getItem("user")||"null");
override token: string | null=window.localStorage.getItem("token");
constructor(private router:Router) {
  super();
}

  override setAuthInfo(user:UserModel,token:string): void {
    this.user=user;
    this.token=token;
    window.localStorage.setItem("user",JSON.stringify(user))
    window.localStorage.setItem("token",token)
  }

  override deleteAuthInfo(): void{
    this.user=null;
    this.token=null;
    window.localStorage.removeItem("user")
    window.localStorage.removeItem("token")
    this.router.navigate(["/login"])
  };

}
