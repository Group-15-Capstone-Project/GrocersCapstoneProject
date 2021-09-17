import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

 
  loginRef = new FormGroup({
    userId:new FormControl(),
    password:new FormControl()
  });
  msg?:string;
  lockMsg?:string;
  counter:number=0;
  checkUserLogin:boolean=false;
  constructor(public loginSer:  SignInService, public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let user = this.loginRef.value;
    this.loginSer.checkLoginDetails(user).subscribe(result=>
    {
        if (result=="Success"){
          this.router.navigate(['user-dashboard', user.userId]);
        }
      else{
        this.msg = 'Invalid credentials. Please try again.'
        this.counter= this.counter + 1;
        if (this.counter == 3){
          //console.log("Account locked")
          this.lockMsg = "Account Locked due to multiple attempts"
          this.checkUserLogin = true;
        }
      }
    }, 
    error=>console.log(error)
    )
    this.loginRef.reset();
}
}

