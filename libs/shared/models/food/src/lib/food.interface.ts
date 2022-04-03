import { FoodCategory } from './food-category.enum';
import { TacosCategory } from './tacos-category.enum';

export interface Food {
  name: string;
  category: FoodCategory | TacosCategory;
  price?: number;
  size?: number;
  allergens?: string[];
}
