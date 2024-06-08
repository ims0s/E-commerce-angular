import { Injectable } from '@angular/core';
import { IProductRepo } from '../repo_interfaces/IProductsRepo';
import { IProductRemoteDataSource } from 'src/data/datasource/datasource_interface/IProducts_datasource';
import { IProduct } from 'src/data/datasource/data_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepoImpService extends IProductRepo {

constructor(
  private _remoteDataSource : IProductRemoteDataSource
) { 
  super();
}


 override async getAllProducts(): Promise<IProduct[]> {
  let result = await this._remoteDataSource.getAllProducts()
   return result.data
 }

  override async getProduct(product_id:string): Promise<IProduct> {
    let result = await this._remoteDataSource.getProduct(product_id);
    return result.data
    
  }
 

}
