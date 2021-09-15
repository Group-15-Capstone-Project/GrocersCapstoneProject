import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  msg:string=""

  constructor(public LoginSer: LoginService, 
              public router: Router) { }

  ngOnInit(): void {
  }
 
  checkUser(){
     let login = this.LoginRef.value;
     this.LoginSer.checkLogin(login).
     subscribe(result=>{
       if(result=="Success"){
         this.router.navigate(["home",login.email]);
       }else {
           this.msg = result;
       }
  },
    error=>console.log(error));
  this.LoginRef.reset();
}
}
