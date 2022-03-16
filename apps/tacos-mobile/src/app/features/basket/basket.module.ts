import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { BasketRouting } from './routes/basket.routing';

const MODULES = [SharedModule, BasketRouting];

@NgModule({
  declarations: [],
  providers: [],
  imports: [MODULES]
})
export class BasketModule {}
