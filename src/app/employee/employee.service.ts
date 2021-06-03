import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(
    private http:HttpClient
  ) { }

  public getEmployee():Observable<any> {
    return this.http.get('http://localhost:3000/resorces')
  }
}
