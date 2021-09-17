import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class SignInService  {
  constructor(public http:HttpClient) { }

  //
  checkLoginDetails(login:UserClass):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn ", login, {responseType:'text'});
  }

  loginAccountCreate(signUp:UserClass):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",signUp,
    {responseType:'text'});
  }

  updateUserDetails(updateUser:UserClass):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/updateDetails",updateUser,{responseType:'text'})

  }
}
