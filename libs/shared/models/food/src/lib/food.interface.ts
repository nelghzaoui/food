export interface Food {
  name: string;
  category: FoodCategory;
  price?: number;
  size?: number;
  allergens?: string[];
}

export enum FoodCategory {
  MEAT = 'meat',
  SAUCE = 'sauce',
  GARNISH = 'garnish',
  GRATIN = 'gratin',
  FINGER = 'finger',
  DRINK = 'drink',
  DESSERT = 'dessert'
}

export const FOOD_CATEGORY = [
  FoodCategory.MEAT,
  FoodCategory.SAUCE,
  FoodCategory.GARNISH,
  FoodCategory.GRATIN,
  FoodCategory.DRINK,
  FoodCategory.DESSERT,
  FoodCategory.FINGER
];
