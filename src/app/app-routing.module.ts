import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'product-detail-preorder', loadChildren: './product-detail-preorder/product-detail-preorder.module#ProductDetailPreorderPageModule' },
  { path: 'product-detail-request', loadChildren: './product-detail-request/product-detail-request.module#ProductDetailRequestPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'forgetpass', loadChildren: './forgetpass/forgetpass.module#ForgetpassPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'welcomepage', loadChildren: './welcomepage/welcomepage.module#WelcomepagePageModule' },

  // { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
