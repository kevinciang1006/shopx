import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailRequestPage } from './product-detail-request.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailRequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailRequestPage]
})
export class ProductDetailRequestPageModule {}
