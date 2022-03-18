import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
import { BasketRouting } from './routes/basket.routing';
import { BasketPage } from './views/basket.page';

const MODULES = [SharedModule, BasketRouting];

@NgModule({
  declarations: [BasketPage],
  providers: [],
  imports: [MODULES]
})
export class BasketModule {}
