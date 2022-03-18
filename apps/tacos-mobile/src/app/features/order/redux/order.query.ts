import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrderState, OrderStore } from './order.store';

@Injectable()
export class OrderQuery extends QueryEntity<OrderState> {
  currentFlow$ = this.select('currentFlow');

  constructor(protected store: OrderStore) {
    super(store);
  }
}
