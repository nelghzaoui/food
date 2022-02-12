import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './controller/food.controller';
import { FoodService } from './service/food.service';
import { FoodDocument, FOOD_SCHEMA } from './models/food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FoodDocument.name, schema: FOOD_SCHEMA }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
