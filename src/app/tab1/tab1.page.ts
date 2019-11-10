import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
  ) {}

  openProductDetailPreorder() {
    // this._router.navigateByUrl('product-detail-preorder');
    this._navCtrl.navigateForward('product-detail-preorder');
  }




}
