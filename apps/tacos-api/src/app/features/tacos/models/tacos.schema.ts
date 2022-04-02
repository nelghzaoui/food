import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TacosCategory, TACOS_CATEGORY } from './tacos-category.interface';

@Schema()
export class Tacos extends Document {
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
