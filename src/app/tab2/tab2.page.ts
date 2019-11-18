import { Component } from '@angular/core';

import { CountriesDB } from '../@fake-db/countries';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  countries = CountriesDB;

  favorites = [{
    "image": "http://dummyimage.com/101x147.jpg/ff4444/ffffff",
    "name": "Val Leahey",
    "country": "Russia",
    "price": "$8.91"
  }, {
    "image": "http://dummyimage.com/180x204.jpg/cc0000/ffffff",
    "name": "Laurianne Shade",
    "country": "Portugal",
    "price": "$9.65"
  }, {
    "image": "http://dummyimage.com/188x202.bmp/5fa2dd/ffffff",
    "name": "Alister Station",
    "country": "Oman",
    "price": "$4.16"
  }, {
    "image": "http://dummyimage.com/180x204.jpg/cc0000/ffffff",
    "name": "Caroline Khotama",
    "country": "Japan",
    "price": "$9.65"
  }, {
    "image": "http://dummyimage.com/180x204.jpg/cc0000/ffffff",
    "name": "Celline Puthri Chitra",
    "country": "Africa",
    "price": "$9.65"
  }, {
    "image": "http://dummyimage.com/180x204.jpg/cc0000/ffffff",
    "name": "Felicia Artha",
    "country": "Korea",
    "price": "$9.65"
  }]

  constructor(
    private _navCtrl: NavController
  ) { }

  openProductDetailRequest() {
    this._navCtrl.navigateForward('product-request-detail');
  }

}
