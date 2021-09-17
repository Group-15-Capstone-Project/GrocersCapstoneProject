import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmprequestService } from '../emprequest.service';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  requestRef = new FormGroup({
    emprequest: new FormControl()

  })
  
  

  constructor(public productreqSer:EmprequestService, public router:Router) { }

  ngOnInit(): void {
  }

  sendrequest() {

    // let productRequest = this.requestRef.value;
    // this.productreqSer.adminRequest(productRequest).


  }
    logout(){
      this.router.navigate(["employeedashboard"])

    }
}
