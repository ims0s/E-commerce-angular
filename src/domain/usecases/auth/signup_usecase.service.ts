import { Router } from '@angular/router';
import { UserModel } from './../../../data/datasource/data_model/Auth_model';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/core/services/Auth.service';
import { signUpFormModel } from 'src/data/datasource/data_model/Auth_model';
import { IAuth_Repo } from 'src/data/repositries/repo_interfaces/IAuthRepo';

@Injectable({
  providedIn: 'root'
})
export class Signup_usecaseService {

  constructor(
    private _repo : IAuth_Repo,
    private _Auth_service : AuthService,
    private route:Router
  ) { }


   async execute(body:signUpFormModel){
    try{
      let res=await this._repo.signUp(body)
      const {token,user} = res
      this._Auth_service.setAuthInfo(user,token);
      this.route.navigate(["/home"])
      return null
    }catch (error){
      throw error;
    }
    
  }
}
