import { Injectable } from '@angular/core';
import { IProduct } from 'src/data/datasource/data_model/product';
import { IProductRepo } from 'src/data/repositries/repo_interfaces/IProductsRepo';

@Injectable({
  providedIn: 'root'
})
export class Get_product_usecaseService {

constructor(
  private _product_repo : IProductRepo
) { }


  async execute(product_id:string):Promise<IProduct>{
    let result = await this._product_repo.getProduct(product_id);

    return result;
  }
}
