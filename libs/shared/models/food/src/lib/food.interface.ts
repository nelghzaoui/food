export interface Food {
  name: string;
  category: FoodCategory;
  price?: number;
  size?: number;
  allergens?: string[];
}

export enum FoodCategory {
  TACOS = 'tacos',
  FINGER = 'finger',
  DRINK = 'drink',
  DESSERT = 'dessert'
}

export const FOOD_CATEGORY = [FoodCategory.DRINK, FoodCategory.DESSERT, FoodCategory.FINGER];
