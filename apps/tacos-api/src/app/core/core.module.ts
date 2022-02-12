import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreService } from './service/core.service';

@Module({
  imports: [MongooseModule.forFeature()],
  providers: [CoreService]
})
export class CoreModule {}
