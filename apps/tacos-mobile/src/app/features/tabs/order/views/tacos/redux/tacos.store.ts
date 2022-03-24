import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { TacosStep } from '../models/step.enum';
import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';
import { Style } from '../models/style.interface';

export interface TacosState {
  currentStep: TacosStep;
  /* Choices */
  styles: MobileFood[];
  /* Selected */
  selectedStyle: Style;
}

export const initialState: TacosState = {
  currentStep: TacosStep.STYLE,
  /* Choices */
  styles: [],
  /* Selected */
  selectedStyle: Style.CLASSIC
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
