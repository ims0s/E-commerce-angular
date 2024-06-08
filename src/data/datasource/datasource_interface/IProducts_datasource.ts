import { apiResponseModel } from "../data_model/api_respone_model";
import { IProduct } from "../data_model/product";

export  abstract class IProductRemoteDataSource {
    abstract getAllProducts():Promise<apiResponseModel<IProduct[]>>
    abstract getProduct(product_id:string):Promise<apiResponseModel<IProduct>>


}