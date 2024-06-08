import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProductRemoteDataSource } from './datasource/datasource_interface/IProducts_datasource';
import { ProductsRemoteDataSourceImp } from './datasource/remote_datasource_impl/Product_datacource_imp';
import { IProductRepo } from './repositries/repo_interfaces/IProductsRepo';
import { ProductRepoImpService } from './repositries/repo_providers/ProductRepoImp.service';

const DATA_SERVICE=[
  {provide: IProductRemoteDataSource , useClass: ProductsRemoteDataSourceImp},
  {provide: IProductRepo , useClass: ProductRepoImpService}

]

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[DATA_SERVICE],
  declarations:[]
})
export class DataModule { }
