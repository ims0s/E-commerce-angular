import { Observable } from "rxjs";

export abstract class ApiAbstract{
    protected baseUrl:string='https://ecommerce.routemisr.com/api/v1/'

    abstract get(endpoint:string , token?:string):Observable<any>

    abstract post(endpoint:string,body:any, token?:string):Observable<any>

    abstract put(endpoint:string, body:any , token?:string):Observable<any>

    abstract delete(endpoint:string , token?:string):Observable<any>

    
}