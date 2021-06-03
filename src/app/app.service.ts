import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {

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
}

