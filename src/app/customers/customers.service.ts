import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';

@Injectable()
export class CustomersService {

  public customerList:Customer[]=[
    {
      id:1,
      name:'abc',
      address:'valsad'
    },
    {
      id:2,
      name:'abc',
      address:'valsad'
    },
    {
      id:3,
      name:'abc',
      address:'valsad'
    }
  ]
  constructor() { }

  public getCustomers():Observable<Customer[]>{
    return of(this.customerList)
  }

  public deleteCustomer(value:number):Observable<any>{
    debugger
    return of(true)
  }
}
