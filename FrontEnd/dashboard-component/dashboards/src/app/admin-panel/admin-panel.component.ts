import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
    loginRef1 = new FormGroup({
    user:new FormControl(),
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
  constructor() { 
    
  }
  

  ngOnInit(): void {
  }
  createEmployee(){
    let login = this.loginRef1.value;
    let user = login.user;
    let pass = "welcome123"; 
    console.log(user);
    console.log(pass); 



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
