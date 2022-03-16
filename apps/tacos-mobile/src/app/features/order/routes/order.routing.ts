import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacePage } from '../pages/place/place.page';

const routes: Routes = [
  {
    path: '',
    component: PlacePage
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
