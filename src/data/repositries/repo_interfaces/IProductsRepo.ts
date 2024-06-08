import { IProduct } from "src/data/datasource/data_model/product";

export abstract class IProductRepo {

    abstract getAllProducts():Promise<IProduct[]>;
    abstract getProduct(product_id:string):Promise<IProduct>;
}