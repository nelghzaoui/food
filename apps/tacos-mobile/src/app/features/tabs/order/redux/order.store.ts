import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Place } from '../models/place.interface';

export interface OrderState {
  selectedPlace: Place;
}

export const initialState: OrderState = {
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
