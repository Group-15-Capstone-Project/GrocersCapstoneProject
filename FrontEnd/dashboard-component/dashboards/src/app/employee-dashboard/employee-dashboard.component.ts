import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmpsignInService } from '../empsign-in.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  emplogin = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()

  });
  constructor(public empSer:EmpsignInService, public router:Router) { }
  msg?:string
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.emplogin.value
    this.empSer.checkemplogin(login).subscribe(result=>{
      console.log(login)
      if (result== "Success") {
      this.router.navigate(["employeepanel"])
    }else {this.msg =result;}
    
     this.emplogin.reset()
  }
    )}
}