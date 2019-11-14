import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'product-detail-preorder', loadChildren: './product-detail-preorder/product-detail-preorder.module#ProductDetailPreorderPageModule' },
  { path: 'product-detail-request', loadChildren: './product-detail-request/product-detail-request.module#ProductDetailRequestPageModule' },  { path: 'product-request-detail', loadChildren: './product-request-detail/product-request-detail.module#ProductRequestDetailPageModule' },
  { path: 'trendingreq', loadChildren: './trendingreq/trendingreq.module#TrendingreqPageModule' },
  { path: 'purchasepage', loadChildren: './purchasepage/purchasepage.module#PurchasepagePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
