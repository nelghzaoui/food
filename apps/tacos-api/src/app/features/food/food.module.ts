import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './controller/food.controller';
import { FoodService } from './service/food.service';
import { FoodDocument, FoodSchema } from './models/food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FoodDocument.name, schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
