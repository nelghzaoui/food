import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
