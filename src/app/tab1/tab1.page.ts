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


  product = {
    name: 'burger',
    description: 'burger enak',
    color: 'brown'
  };

  namaTim = ['KC', 'Eldwin', 'Celline', 'Crkho', 'Felicia'];

  // 0, 1, 2, 3, 4;

  namaTimObject = {
    0: 'KC',
    1: 'Eldwin'
  };



  productPreorder = {
    nama: 'tes',
    harga: 500,
    negara: 'Indo',
    gambar: 'gambar'
  }



  products = [
    {
      name: 'burger',
      description: 'burger enak',
      color: 'brown'
    },
    {
      name: 'burger',
      description: 'burger enak',
      color: 'brown'
    },
    {
      name: 'burger',
      description: 'burger enak',
      color: 'brown'
    }
  ]

  featureProducts = [
    {
      "image": "http://dummyimage.com/1280x720.jpg/dddddd/000000"
    },
    {
      "image": "http://dummyimage.com/1280x720.png/5fa2dd/ffffff"
    },
    {
      "image": "http://dummyimage.com/1280x720.png/cc0000/ffffff"
    },
    {
      "image": "http://dummyimage.com/1280x720.bmp/dddddd/000000"
    },
    {
      "image": "http://dummyimage.com/1280x720.png/dddddd/000000"
    }
  ]
  // namaTimObject = [

  // ]

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
    // tslint:disable-next-line: variable-name
    private _navCtrl: NavController,
  ) {
    this.topTravellers = this.topTravellers.sort((n1, n2) => n2.review_count - n1.review_count);

    console.log(this.product.color);
    console.log(this.product.description);
  }

  openProductDetailPreorder() {
    // this._router.navigateByUrl('product-detail-preorder');
    this._navCtrl.navigateForward('product-detail-preorder');
  }

  openLogin() {
    // this._router.navigateByUrl('product-detail-preorder');
    this._navCtrl.navigateForward('login');
  }

  opennegara() {
    // this._router.navigateByUrl('negara');
    this._navCtrl.navigateForward('negara');
  }




  opentrendingreq() {
    this._navCtrl.navigateForward('trendingreq');
  }
  openpurchasepage() {
    this._navCtrl.navigateForward('purchasepage');
  }
}
