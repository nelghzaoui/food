export interface Food {
  name: string;
  category: FoodCategory;
  price?: number;
  allergens?: string[];
}

export enum FoodCategory {
  Meat = 'meat',
  Sauce = 'sauce',
  Garnish = 'garnish',
  Gratin = 'gratin',
  Drink = 'drink',
  Dessert = 'dessert',
  Finger = 'finger'
}
