import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { MobileFood } from '../services/food/models/mobile-food.interface';

export interface CoreState {
  foods: MobileFood[];
}

export const initialState: CoreState = {
  foods: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'CoreStore',
  resettable: true
})
export class CoreStore extends EntityStore<CoreState> {
  constructor() {
    super(initialState);
  }
}
