import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private _navCtrl: NavController, private _router: Router) { }

  ngOnInit() {
  }

  items = [
    {
      label: 'review',
      qty: 0,
      path: 'review'
    },
    {
      label: 'Purchases',
      qty: 0,
      path: 'purchases'
    },
    {
      label: 'Trip',
      qty: 0,
      path: 'trip'
    },
    {
      label: 'Recommendations',
      qty: 0,
      path: 'recommendations'
    },
    {
      label: 'Followers',
      qty: 0,
      path: 'followers'
    },
    {
      label: 'Following',
      qty: 0,
      path: 'following'
    }
  ]

  DisplayPage(path:string)  {
    //this._navCtrl.navigateForward(path);
    this._router.navigateByUrl(path);
  }
}
