import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/data/datasource/data_model/product';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {

  @Input({required:true})product!:IProduct;
  constructor() { }

  ngOnInit() {
  }

}
