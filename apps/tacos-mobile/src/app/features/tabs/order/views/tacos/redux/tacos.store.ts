import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Step } from '../models/step.enum';
import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';
import { Style } from '../models/style.interface';

export interface TacosState {
  currentStep: Step;
  /* Choices */
  styles: MobileFood[];
  sizes: MobileFood[];
  meats: MobileFood[];
  sauces: MobileFood[];
  garnishes: MobileFood[];
  gratins: MobileFood[];
  /* Selected */
  selectedStyle: Style;
}

export const initialState: TacosState = {
  currentStep: Step.STYLE,
  /* Choices */
  styles: [],
  sizes: [],
  meats: [],
  sauces: [],
  garnishes: [],
  gratins: [],
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
