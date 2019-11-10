import { Component, OnInit } from '@angular/core';
import { ProductPreordersDetail } from '../@fake-db/products-preorders-detail';

@Component({
  selector: 'app-product-detail-preorder',
  templateUrl: './product-detail-preorder.page.html',
  styleUrls: ['./product-detail-preorder.page.scss'],
})
export class ProductDetailPreorderPage implements OnInit {

  productsPreordersDetail = ProductPreordersDetail;
  product: any;

  stars = [1, 2, 3, 4, 5];
  
  slideOpts = {
    // height: 500
    // autoHeight: true
    preloadImages: true,
    updateOnImagesReady: true,
  };

  constructor() { 
    this.product = this.productsPreordersDetail[Math.floor(Math.random() * this.productsPreordersDetail.length)];
  }

  ngOnInit() {
  }

}
