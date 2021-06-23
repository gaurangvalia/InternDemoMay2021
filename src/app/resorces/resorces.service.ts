import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resources, Student } from './resorces.model';

@Injectable()
export class ResorcesService {

  public url :string= "http://localhost:3000/"
  constructor(
    private http:HttpClient
  ) { }

  public getResorces():Observable<Resources[]>{
    return this.http.get<Resources[]>(`${this.url}resorces`) 
  }
  public addResoruce(data:any):Observable<Resources>{
    // data = {
    //   "name":"abc",
    //   "price":42000
    // }
    return this.http.post<Resources>(`${this.url}resorces`,data) 
  }


  // -------------------- crud ---------------------------------
  public addStudent(data:Student):Observable<Student>{
   return this.http.post<Student>(`${this.url}student`,data) // add
  }

  public editStudent(data:Student):Observable<Student>{
    debugger
   return this.http.put<Student>(`${this.url}student/${data.id}`,data) // edit
  }

  public deleteStudnet(id:number):Observable<number>{
   return this.http.delete<number>(`${this.url}student/${id}`) //delete
  }
  public getStudnet():Observable<Student[]>{
   return this.http.get<Student[]>(`${this.url}student`) //get
  }
  public getByIdStudnet(id:any):Observable<Student>{
   return this.http.get<Student>(`${this.url}student/${id}`) //get by id 
  }

}
