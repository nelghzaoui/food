import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { OrderRouting } from './routes/order.routing';
/* Providers */
import { OrderQuery } from './redux/order.query';
import { OrderStore } from './redux/order.store';
import { OrderService } from './services/order.service';
/* Components */
import { PlacePage } from './pages/place/place.page';

const COMPONENTS = [PlacePage];
const PROVIDERS = [OrderService, OrderQuery, OrderStore];
const MODULES = [SharedModule, OrderRouting];

@NgModule({
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  imports: [MODULES]
})
export class OrderModule {}
