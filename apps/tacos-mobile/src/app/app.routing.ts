import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./features/order/order.module').then((m) => m.OrderModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./features/basket/basket.module').then((m) => m.BasketModule)
  },
  {
    path: 'plus',
    loadChildren: () => import('./features/plus/plus.module').then((m) => m.PlusModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRouting {}
