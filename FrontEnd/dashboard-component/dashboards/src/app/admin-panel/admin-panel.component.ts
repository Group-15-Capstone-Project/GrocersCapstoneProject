import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmpsignInService } from '../empsign-in.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
    loginRef1 = new FormGroup({
    employeeID:new FormControl(),
    employeePassword:new FormControl()
  });
  loginRef2 = new FormGroup({
    usertodelete:new FormControl(),
  });
  loginRef3 = new FormGroup({
    productName:new FormControl(),
    productPrice:new FormControl(),
    productQuantity:new FormControl(),
  });
  loginRef4 = new FormGroup({
    productName:new FormControl(),
  });
  loginRef5 = new FormGroup({
    productName:new FormControl(),
    productPrice:new FormControl(),
    productQuantity:new FormControl(),
  });
  constructor(public empSer:EmpsignInService, routes:Router) {
   }
   msg?: string;
  

  ngOnInit(): void {
  }
  createEmployee(){
    let login = this.loginRef1.value;
    this.empSer.logincreateEmployee(login).subscribe(result=>this.msg=result,error=>console.log(error));
    this.loginRef1.reset();
    



  }
  deleteEmployee()
  {
    let login = this.loginRef2.value;
    let userdelete = login.usertodelete;
    console.log("this is the user to delete-" + userdelete);



  }
  addProduct()
  {
    let product = this.loginRef3.value;
    let productprice = Number(product.productPrice);
    let productname = product.productName;
    let productquantity = Number(product.productQuantity);
    console.log("product name-" +productname);
    console.log("product price-" +productprice);
    console.log("product quantity-" +productquantity);


    
  }
  deleteProduct()
  {
    let product = this.loginRef4.value;
    let productname = product.productName;
    console.log("product name-" +productname);



  }
  updateProduct()
  {
    let product = this.loginRef5.value;
    let productprice = Number(product.productPrice);
    let productname = product.productName;
    let productquantity = Number(product.productQuantity);
    console.log("product name-" +productname);
    console.log("product price-" +productprice);
    console.log("product quantity-" +productquantity);


  }
  showRequestTable()
  {
   console.log("Button1 clicked");

  }

  generateReports()
  {
    console.log("Button2 clicked");
  }

}
