import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Style, TacosStyle } from '../models/style.interface';
import { TacosStep } from '../models/step.enum';

export interface TacosState {
  currentStep: TacosStep;
  /* Choices */
  styles: TacosStyle[];
}

export const initialState: TacosState = {
  currentStep: TacosStep.STYLE,
  styles: []
};

@Injectable()
@StoreConfig({
  name: 'TacosStore',
  resettable: true
})
export class TacosStore extends EntityStore<TacosState> {
  constructor() {
    super(initialState);
  }
}
