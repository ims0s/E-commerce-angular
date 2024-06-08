import { Injectable } from '@angular/core';
import { IProduct } from 'src/data/datasource/data_model/product';
import { IProductRepo } from 'src/data/repositries/repo_interfaces/IProductsRepo';

@Injectable({
  providedIn: 'root'
})
export class Get_all_products_useCaseService {

constructor(private _productRepo :IProductRepo ) { }

async execute():Promise<IProduct[]>{
  let result = await this._productRepo.getAllProducts()
  return result
}

}
