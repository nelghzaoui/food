import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Food, TacosCategory, TACOS_CATEGORY } from '@food/shared/models/food';

@Schema()
export class Tacos extends Document implements Food {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: 'String', enum: TACOS_CATEGORY })
  category: TacosCategory;

  @Prop()
  price?: number;

  @Prop()
  size?: number;

  @Prop()
  allergens?: string[];
}

export const TACOS_SCHEMA = SchemaFactory.createForClass(Tacos);
