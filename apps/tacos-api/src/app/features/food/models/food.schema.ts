import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Food, FoodCategory, FOOD_CATEGORY } from '@food/shared/models/food';

@Schema()
export class Foods extends Document implements Food {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: 'String', enum: FOOD_CATEGORY })
  category: FoodCategory;

  @Prop()
  price?: number;

  @Prop()
  size?: number;

  @Prop()
  allergens?: string[];
}

export const FOOD_SCHEMA = SchemaFactory.createForClass(Foods);
