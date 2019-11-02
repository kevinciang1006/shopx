import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CountriesDB } from '../@fake-db/countries';
import { Preorders } from '../@fake-db/products-preorders';
import { ProductsTrending } from '../@fake-db/products-trending';
import { ProductsRecommendation } from '../@fake-db/products-recommendation';
import { ProductsCategories } from '../@fake-db/products-categories';
import { TopTravellers } from '../@fake-db/top-travellers';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries = CountriesDB;
  preorders = Preorders;
  productsTrending = ProductsTrending;
  productsRecommendation = ProductsRecommendation;
  productsCategories = ProductsCategories;
  topTravellers = TopTravellers;

  stars = [1, 2, 3, 4, 5];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop: true,
    preloadImages: true,
    updateOnImagesReady: true,
  };

  constructor(
    private _navCtrl: NavController,
  ) {
    this.topTravellers = this.topTravellers.sort((n1, n2) => n2.review_count - n1.review_count);
  }

  openProductDetailPreorder() {
    // this._router.navigateByUrl('product-detail-preorder');
    this._navCtrl.navigateForward('product-detail-preorder');
  }

}
