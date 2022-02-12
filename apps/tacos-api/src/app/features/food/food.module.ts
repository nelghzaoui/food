import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './controller/food.controller';
import { FoodService } from './service/food.service';
import { Food, FoodSchema } from './models/food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}