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

  })
  constructor(public empSer:EmpsignInService, routes:Router) { }

  ngOnInit(): void {
  }
  msg?: String;

  checkUser() {
    let login = this.emplogin.value
    this.empSer.checkemplogin(login).subscribe(result=>console.log(result),error => console);
    this.emplogin.reset();
  }
}


