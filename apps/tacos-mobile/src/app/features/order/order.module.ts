import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PlacePage } from './pages/place/place.page';
import { OrderQuery } from './redux/order.query';
import { OrderStore } from './redux/order.store';
import { OrderRouting } from './routes/order.routing';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [PlacePage],
  providers: [OrderService, OrderQuery, OrderStore],
  imports: [SharedModule, OrderRouting]
})
export class OrderModule {}
