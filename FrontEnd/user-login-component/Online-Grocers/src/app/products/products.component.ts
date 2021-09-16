import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

/* let product = document.getElementById('product')
let price = document.getElementById('price')
let quantity = document.getElementById('qty') */
export class ProductsComponent implements OnInit {
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

 
}
