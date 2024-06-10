import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/Auth.service';
import { signInFormModel, signInResponseModel } from 'src/data/datasource/data_model/Auth_model';
import { Auth_Repo_ImpService } from 'src/data/repositries/repo_providers/AuthRepoImp.service';

@Injectable({
  providedIn: 'root'
})
export class Signin_usecaseService {

constructor(
  private _repo : Auth_Repo_ImpService,
  private _auth_service:AuthService,
  private route:Router,
) { }

async execute(body:signInFormModel){
  try{
    let res = await this._repo.signIn(body);
    const {token , user} = res;
    this._auth_service.setAuthInfo(user,token);
    this.route.navigate(["/home"])
  }catch(error){
    throw error
  }
}

}
