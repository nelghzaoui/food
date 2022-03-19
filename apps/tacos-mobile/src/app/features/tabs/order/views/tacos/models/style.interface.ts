import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';

export interface TacosStyle extends MobileFood {
  name: Style;
}

export enum Style {
  CLASSIC = 'classic',
  GRATIN = 'gratin'
}
