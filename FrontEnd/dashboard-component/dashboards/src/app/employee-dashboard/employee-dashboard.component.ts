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
    employeeID: new FormControl(),
    employeePassword: new FormControl()

  });
  constructor(public empSer:EmpsignInService, public routes:Router) { }
  msg?:string
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.emplogin.value
    this.empSer.checkemplogin(login).subscribe(result=>{
      
      if (result== "Success") {
      this.routes.navigate(["employeePanel"])
    }else {this.msg =result;}
    
     this.emplogin.reset()
  }
    )}
}