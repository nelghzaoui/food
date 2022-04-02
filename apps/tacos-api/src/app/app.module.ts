import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { FoodModule } from './features/food/food.module';
import { TacosModule } from './features/tacos/tacos.module';
import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(environment.endpoint), CoreModule, FoodModule, TacosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
