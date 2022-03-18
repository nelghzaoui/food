import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsFirstLaunch } from './core/guards/first-launch.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [IsFirstLaunch]
  },
  {
    path: 'home',
    loadChildren: () => import('./features/tabs/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./features/tabs/order/order.module').then((m) => m.OrderModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./features/tabs/basket/basket.module').then((m) => m.BasketModule)
  },
  {
    path: 'plus',
    loadChildren: () => import('./features/tabs/plus/plus.module').then((m) => m.PlusModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRouting {}
