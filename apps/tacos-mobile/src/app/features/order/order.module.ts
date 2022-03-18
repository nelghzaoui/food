import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { OrderRouting } from './routes/order.routing';
/* Providers */
import { OrderQuery } from './redux/order.query';
import { OrderStore } from './redux/order.store';
import { OrderService } from './services/order.service';
/* Views */
import { OrderPage } from './views/order.page';
import { PlaceComponent } from './views/place/place.component';

const VIEWS = [OrderPage, PlaceComponent];
const PROVIDERS = [OrderService, OrderQuery, OrderStore];
const MODULES = [SharedModule, OrderRouting];

@NgModule({
  declarations: [VIEWS],
  providers: [PROVIDERS],
  imports: [MODULES]
})
export class OrderModule {}
