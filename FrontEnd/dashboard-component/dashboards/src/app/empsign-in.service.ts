import { Observable } from 'rxjs';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpsignInService {


  constructor(public http:HttpClient) { }

  checkemplogin(login:EmployeeDashboardComponent):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/signIn", login,{responseType:'text'})
  }
}
