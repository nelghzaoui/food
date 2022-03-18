import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TabsLayoutPage } from './tabs-layout.page';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(TabsModule.ROUTES)],
  declarations: [TabsLayoutPage],
  providers: []
})
export class TabsModule {
  private static ROUTES: Routes = [
    {
      path: '',
      component: TabsLayoutPage,
      children: [
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)
        },
        {
          path: 'order',
          loadChildren: () => import('./order/order.module').then((m) => m.OrderModule)
        },
        {
          path: 'basket',
          loadChildren: () => import('./basket/basket.module').then((m) => m.BasketModule)
        },
        {
          path: 'plus',
          loadChildren: () => import('./plus/plus.module').then((m) => m.PlusModule)
        }
      ]
    }
  ];
}
