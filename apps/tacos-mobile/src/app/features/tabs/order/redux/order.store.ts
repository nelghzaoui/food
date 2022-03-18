import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { OrderFlow } from '../models/order-flow.enum';
import { Place } from '../models/place.interface';

export interface OrderState {
  currentFlow: OrderFlow;
  selectedPlace: Place;
}

export const initialState: OrderState = {
  currentFlow: OrderFlow.TACOS,
  selectedPlace: Place.INSIDE
};

@Injectable()
@StoreConfig({
  name: 'OrderStore',
  resettable: true
})
export class OrderStore extends EntityStore<OrderState> {
  constructor() {
    super(initialState);
  }
}
