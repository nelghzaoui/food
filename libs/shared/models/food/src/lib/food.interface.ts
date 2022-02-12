export interface Food {
  name: string;
  category: FoodCategory;
  price?: number;
  allergens?: string[];
}

export enum FoodCategory {
  MEAT = 'meat',
  SAUCE = 'sauce',
  GARNISH = 'garnish',
  GRATIN = 'gratin',
  DRINK = 'drink',
  DESSERT = 'dessert',
  FINGER = 'finger'
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
