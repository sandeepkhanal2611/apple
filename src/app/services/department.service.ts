import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Department} from 'src/app/models/department-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
 // localhost:42209/api
  readonly APIUrl ="http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com/api";

  getDepList(): Observable<Department[]>{
    return this.http.get<Department[]>(this.APIUrl + '/department');
  }
  
}
