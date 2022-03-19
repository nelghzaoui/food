import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacosComponent } from '../views/tacos.component';

const routes: Routes = [
  {
    path: '',
    component: TacosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacosRouting {}
