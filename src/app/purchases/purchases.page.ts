import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.page.html',
  styleUrls: ['./purchases.page.scss'],
})
export class PurchasesPage implements OnInit {
  segment:string;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(va:string) {
    
    this.segment = va;
    
  }
}
