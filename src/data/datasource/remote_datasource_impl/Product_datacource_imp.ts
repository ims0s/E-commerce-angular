import { Injectable } from '@angular/core';
import { IProductRemoteDataSource } from '../datasource_interface/IProducts_datasource';
import { ApiService } from 'src/core/services/api.service';
import { IProduct } from '../data_model/product';
import { apiEndpoints } from 'src/core/constant/apiEndpoints';
import { apiResponseModel } from '../data_model/api_respone_model';

@Injectable({
  providedIn: 'root'
})
export class ProductsRemoteDataSourceImp extends IProductRemoteDataSource {

  constructor( private api:ApiService ) {
    super();
   }

  override getAllProducts(): Promise<apiResponseModel<IProduct[]>> {

    let promise:Promise<apiResponseModel<IProduct[]>> = new Promise<apiResponseModel<IProduct[]>>((res,rej) =>{
      this.api.get(apiEndpoints.getProducts).subscribe({
        next:(data:apiResponseModel<IProduct[]>)=>{
          res(data)
        },
        error:error =>{
          rej(error)
        }
      })

    })
    return promise
  }



  override getProduct(product_id:string): Promise<apiResponseModel<IProduct>> {
    const promise:Promise<apiResponseModel<IProduct>>=new Promise<apiResponseModel<IProduct>>((res, rej)=>{

      this.api.get(apiEndpoints.getProducts+product_id).subscribe({
        next: (data:apiResponseModel<IProduct>)=> res(data),
        error: error => rej(error)
      })

    })

    return promise
  }


  
}
