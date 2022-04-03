import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
/* Controllers */
import { FoodController } from './controllers/food.controller';
import { TacosController } from './controllers/tacos.controller';
/* Service */
import { FoodService } from './services/food.service';
import { TacosService } from './services/tacos.service';
/* Models */
import { Foods, FOOD_SCHEMA } from './models/food.schema';
import { Tacos, TACOS_SCHEMA } from './models/tacos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Foods.name, schema: FOOD_SCHEMA },
      { name: Tacos.name, schema: TACOS_SCHEMA }
    ])
  ],
  controllers: [FoodController, TacosController],
  providers: [FoodService, TacosService]
})
export class FoodModule {}
