import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { 

  }
  addsProducts(login:Products):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn",login)
  }
}
