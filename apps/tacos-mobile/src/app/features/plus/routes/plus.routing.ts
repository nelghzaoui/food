import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusPage } from '../views/plus/plus.page';

const routes: Routes = [
  {
    path: '',
    component: PlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlusRouting {}
