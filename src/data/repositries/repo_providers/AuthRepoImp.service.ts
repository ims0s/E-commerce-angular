import { Injectable } from '@angular/core';
import { IAuth_Repo } from '../repo_interfaces/IAuthRepo';
import { signUpFormModel, signUpResponseModel } from 'src/data/datasource/data_model/Auth_model';
import { IAuthDataSource } from 'src/data/datasource/datasource_interface/IAuth_datasource';

@Injectable({
  providedIn: 'root'
})
export class Auth_Repo_ImpService extends IAuth_Repo {

constructor(private _remote_datasource : IAuthDataSource ) { 
  super();
}

override async signUp(body:signUpFormModel): Promise<signUpResponseModel> {
  let promise = await this._remote_datasource.signUp(body)
  return promise
}

}
