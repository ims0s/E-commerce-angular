import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProductRemoteDataSource } from './datasource/datasource_interface/IProducts_datasource';
import { ProductsRemoteDataSourceImp } from './datasource/remote_datasource_impl/Product_datacource_imp';
import { IProductRepo } from './repositries/repo_interfaces/IProductsRepo';
import { ProductRepoImpService } from './repositries/repo_providers/ProductRepoImp.service';
import { IAuthDataSource } from './datasource/datasource_interface/IAuth_datasource';
import { Auth_dataSource } from './datasource/remote_datasource_impl/Auth_datasource_imp';
import { IAuth_Repo } from './repositries/repo_interfaces/IAuthRepo';
import { Auth_Repo_ImpService } from './repositries/repo_providers/AuthRepoImp.service';

const DATA_SERVICE=[
  {provide: IProductRemoteDataSource , useClass: ProductsRemoteDataSourceImp},
  {provide: IProductRepo , useClass: ProductRepoImpService},
  {provide:IAuthDataSource, useClass: Auth_dataSource},
  {provide:IAuth_Repo, useClass: Auth_Repo_ImpService},
  

]

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[DATA_SERVICE],
  declarations:[]
})
export class DataModule { }
