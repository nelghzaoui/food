import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { ProductModule } from './features/product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(environment.endpoint), ProductModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
