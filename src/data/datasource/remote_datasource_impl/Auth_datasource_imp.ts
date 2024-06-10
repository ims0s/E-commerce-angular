import { Injectable } from '@angular/core';
import { IAuthDataSource } from '../datasource_interface/IAuth_datasource';
import { ApiService } from 'src/core/services/api.service';
import { signUpFormModel, signUpResponseModel } from '../data_model/Auth_model';
import { apiEndpoints } from 'src/core/constant/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class Auth_dataSource extends IAuthDataSource {

  constructor(private _api : ApiService) {
    super();
   }


  override signUp(body:signUpFormModel): Promise<signUpResponseModel>{
    let promise: Promise<signUpResponseModel>=new Promise<signUpResponseModel>((res,rej)=>{
      this._api.post(apiEndpoints.signup,body).subscribe({
        next:data => res(data),
        error: error => rej(error)
      })
    })

    return promise
  };

  

}
