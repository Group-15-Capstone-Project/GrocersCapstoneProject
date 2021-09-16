import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  loginRef = new FormGroup({
  user:new FormControl(),
  pass:new FormControl()
});
msg:string=""
  constructor(public router:Router) { } //DI
ngOnInit(): void {
}
checkUser(){
  let login = this.loginRef.value;
  if(login.user=="admin" && login.pass=="admin123"){
        this.router.navigate(["adminpanel"]);  // appended name through path
  } else {
      this.msg  = "InValid username or password";
  }
  this.loginRef.reset();   
}
}