import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchasepage',
  templateUrl: './purchasepage.page.html',
  styleUrls: ['./purchasepage.page.scss'],
})
export class PurchasepagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openrequest() {
    this._navCtrl.navigateForward('purchasepage');
  }
  openpreorder() {
    this._navCtrl.navigateForward('purchasepage');
  }
}
