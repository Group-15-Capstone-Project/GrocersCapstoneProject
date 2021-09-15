import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
http:any;
  constructor() {
      
   }
   checkLogin(login:Login):Observable<any>{
     return this.http.post("http://localhost:9090/api/user/signIn",login)
   }

   createAccount(login:Login):Observable<any>{
   return this.http.post("http://localhost:9090/api/user/signUp",login)
  }
}
