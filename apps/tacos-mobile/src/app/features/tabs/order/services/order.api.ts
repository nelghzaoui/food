import { OrderState } from '../redux/order.store';

export interface OrderServiceFacade {
  createOrder(): void;
  getAllOrders(): void;
  getOrder(id: string): void;
  updateOrder(id: string): void;
  deleteOrder(id: string): void;
  update(value: Partial<OrderState>): void;
}
