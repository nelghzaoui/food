import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './controller/food.controller';
import { FoodService } from './service/food.service';
import { Foods, FOOD_SCHEMA } from './models/food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Foods.name, schema: FOOD_SCHEMA }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
