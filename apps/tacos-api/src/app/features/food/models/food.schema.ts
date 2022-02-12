import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FoodCategory } from '@food/shared/models/product';

@Schema()
export class Food extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  price: number;

  @Prop()
  allergens: string[];
}

export const FoodSchema = SchemaFactory.createForClass(Food);
