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
    pass:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  createEmployee(){
    let login = this.loginRef1.value;
    let user = login.user;
    let pass = "welcome123"; 
    console.log(user);
    console.log(pass); 
  }

}
