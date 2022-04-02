import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TacosController } from './controller/tacos.controller';
import { Tacos, TACOS_SCHEMA } from './models/tacos.schema';
import { TacosService } from './service/tacos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tacos.name, schema: TACOS_SCHEMA }])],
  controllers: [TacosController],
  providers: [TacosService]
})
export class TacosModule {}
