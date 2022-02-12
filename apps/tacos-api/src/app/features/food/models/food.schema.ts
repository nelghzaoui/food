import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Food, FoodCategory, FoodCategoryMapped } from '@food/shared/models/food';

@Schema()
export class FoodDocument extends Document implements Food {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: 'Array', enum: FoodCategoryMapped })
  category: FoodCategory;

  @Prop()
  price: number;

  @Prop()
  allergens: string[];
}

export const FoodSchema = SchemaFactory.createForClass(FoodDocument);
