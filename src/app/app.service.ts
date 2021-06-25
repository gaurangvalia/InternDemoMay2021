import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {

  public url='http://localhost:3000/'
	public resourceList = [
		{
			id: 1,
			name: 'laptop',
			price: 42000,
			details:{
				description:"kdsfjkhsdjkfhsjdkfsd",
				version:'fsddsfsdf'
			}
		},
		{
			id: 2,
			name: 'Camera',
			price: 60000,
			details:{
				description:"kdsfjkhsdjkfhsjdkfsd",
				version:'fsddsfsdf'
			}
		},
		{
			id: 3,
			name: 'Server',
			price: 150000,
			details:{
				description:"kdsfjkhsdjkfhsjdkfsd",
				version:'fsddsfsdf'
			}
		}
	]
	constructor(
		private http: HttpClient
	) { }

	public getResourcesList(): Observable<any> {
		return of(this.resourceList);
		// return this.http.get('localhost:3000/resorces');
	}


	/**
		* addResources
		*/
	public addResources(resourceDetails: any): Observable<any> {
		debugger
		this.resourceList.push(resourceDetails)
		return of(true);
	}


	public api1():Observable<any>{
    return this.http.get(`${this.url}student`)
		
	}
	public api2():Observable<any>{
    return this.http.get(`${this.url}resorces`)
	}
	public api3():Observable<any>{
    return this.http.get(`${this.url}employee`)
	}
}

