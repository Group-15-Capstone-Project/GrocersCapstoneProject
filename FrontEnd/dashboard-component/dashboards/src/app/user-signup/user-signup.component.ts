import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  msg:string = '';
  signUpRef = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    phoneNumber:new FormControl(),
    Address:new FormControl(),
    userId:new FormControl(),
    password:new FormControl()
  });

  constructor(public loginSer:SignInService ) { }

  ngOnInit(): void {
  }

  addUser(){
    let newUser = this.signUpRef.value;
    this.loginSer.loginAccountCreate(newUser).
    subscribe(result=>this.msg=result,error=>console.log(error));

    this.signUpRef.reset();

  }

}
