import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'product-detail-preorder', loadChildren: './product-detail-preorder/product-detail-preorder.module#ProductDetailPreorderPageModule' },
  { path: 'product-detail-request', loadChildren: './product-detail-request/product-detail-request.module#ProductDetailRequestPageModule' },  { path: 'post-trip', loadChildren: './post-trip/post-trip.module#PostTripPageModule' },
  { path: 'negara', loadChildren: './negara/negara.module#NegaraPageModule' },
  { path: 'product-list-page', loadChildren: './product-list-page/product-list-page.module#ProductListPagePageModule' },
  { path: 'trip', loadChildren: './trip/trip.module#TripPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
