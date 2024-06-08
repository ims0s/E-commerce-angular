import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/data/datasource/data_model/product';
import { Get_product_usecaseService } from 'src/domain/usecases/Products/get_product_usecase.service';

@Component({
  selector: 'app-ProductDetailsPage',
  templateUrl: './ProductDetailsPage.component.html',
  styleUrls: ['./ProductDetailsPage.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  product:IProduct={
    _id:"",
    imageCover:"",
    price:0,
    title:"",
    ratingsAverage:0,
    subcategory:[
      {
        name:""
      }
    ],
    category:{
      name:""
    }
  }
  
  constructor(
    private get_product_useCase$ : Get_product_usecaseService,
    private route : ActivatedRoute
  ) {
    this.getProductData(this.route.snapshot.params["productId"]);
  }
  
  ngOnInit() {
  }

  getProductData(id:string){
    this.get_product_useCase$.execute(id).then(data => {
      this.product=data;
    })
  }

}
