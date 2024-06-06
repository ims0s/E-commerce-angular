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

  	post(endpoint:string,body:any):Observable<any>{
    	
		return this.httpClient.get(this.baseUrl+endpoint)

  	}

	  put(endpoint:string,body:any):Observable<any>{
    	
		return this.httpClient.get(this.baseUrl+endpoint)

  	}

	  delete(endpoint:string):Observable<any>{
    	
		return this.httpClient.get(this.baseUrl+endpoint)

  	}


}
