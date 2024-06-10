import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAbstract } from '../interfaces/IApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends ApiAbstract {


  	constructor( private httpClient:HttpClient ) { 
		super();
  	}
	  
	  get(endpoint:string):Observable<any>{
		const header= new HttpHeaders()
		return this.httpClient.get(this.baseUrl+endpoint)
  
	  }

  	post(endpoint:string,body:any,):Observable<any>{
		let token: string | null =window.localStorage.getItem("token")
    	let header ={
			headers:new HttpHeaders().set("token", token?token:"")
		}
		return this.httpClient.post(this.baseUrl+endpoint,body,header)

  	}

	  put(endpoint:string,body:any):Observable<any>{
    	let token: string | null =window.localStorage.getItem("token")
    	let header ={
			headers:new HttpHeaders().set("token", token?token:"")
		}
		return this.httpClient.put(this.baseUrl+endpoint,body,header)

  	}

	  delete(endpoint:string):Observable<any>{
    	let token: string | null =window.localStorage.getItem("token")
    	let header ={
			headers:new HttpHeaders().set("token", token?token:"")
		}
		return this.httpClient.delete(this.baseUrl+endpoint,header)

  	}


}
