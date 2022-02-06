import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  providers: [],
  imports: [SharedModule, RouterModule.forChild(OrderModule.ROUTES)]
})
export class OrderModule {
  private static ROUTES: Routes = [];
}
