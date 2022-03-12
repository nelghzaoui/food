import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { OrderState, OrderStore } from '../redux/order.store';
import { OrderServiceFacade } from './order.api';

@Injectable()
export class OrderService implements OrderServiceFacade {
  constructor(private readonly orderStore: OrderStore) {}

  createOrder() {}

  getAllOrders() {}

  getOrder(id: string) {}

  updateOrder(id: string) {}

  deleteOrder(id: string) {}

  @transaction()
  update(value: Partial<OrderState>) {
    this.orderStore.update(value);
  }
}
