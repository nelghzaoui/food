import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor() {}

  @Post()
  create(): string {
    return 'Add a new product';
  }

  @Get()
  readAll(): string {
    return 'Get all product';
  }

  @Get()
  read(): string {
    return 'Get this product';
  }

  @Put()
  update(): string {
    return 'Update this product';
  }

  @Delete()
  remove(): string {
    return 'Get all product';
  }
}
