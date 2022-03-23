import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPage } from '../views/order.page';
import { PlaceComponent } from '../views/place/place.component';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'tacos',
    loadChildren: () => import('../views/tacos/tacos.module').then((m) => m.TacosModule)
  },
  {
    path: 'place',
    component: PlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRouting {}
