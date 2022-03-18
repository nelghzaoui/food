import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPage } from '../views/order.page';
import { PlacePage } from '../views/place/place.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'place',
    component: PlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRouting {}
