import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/core/interfaces/product';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {

  data:IProduct[]=[];
  constructor() { }

  ngOnInit() {
  }

}
