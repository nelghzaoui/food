import { Food } from '@food/shared/models/food';

export interface MobileFood extends Food {
  imagePath?: string;
}
