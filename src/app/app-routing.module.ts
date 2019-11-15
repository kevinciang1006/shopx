import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'product-detail-preorder', loadChildren: './product-detail-preorder/product-detail-preorder.module#ProductDetailPreorderPageModule' },
  { path: 'product-detail-request', loadChildren: './product-detail-request/product-detail-request.module#ProductDetailRequestPageModule' },  { path: 'review', loadChildren: './review/review.module#ReviewPageModule' },
  { path: 'purchases', loadChildren: './purchases/purchases.module#PurchasesPageModule' },
  { path: 'trip', loadChildren: './trip/trip.module#TripPageModule' },
  { path: 'recommendations', loadChildren: './recommendations/recommendations.module#RecommendationsPageModule' },
  { path: 'followers', loadChildren: './followers/followers.module#FollowersPageModule' },
  { path: 'following', loadChildren: './following/following.module#FollowingPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
