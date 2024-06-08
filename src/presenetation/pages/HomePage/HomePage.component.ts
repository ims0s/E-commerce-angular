import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/data/datasource/data_model/product';
import { Get_all_products_useCaseService } from 'src/domain/usecases/Products/get_all_products_usecase.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {

  data:IProduct[]=[];
  constructor(private $getAllProductUseCase : Get_all_products_useCaseService) {
    this.getAllProduct();
   }

  ngOnInit() {
  }


  async getAllProduct(){
    this.data= await this.$getAllProductUseCase.execute()
    console.log(this.data)
  }
}
