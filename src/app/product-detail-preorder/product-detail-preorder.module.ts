import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPreorderPage } from './product-detail-preorder.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPreorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailPreorderPage]
})
export class ProductDetailPreorderPageModule {}
