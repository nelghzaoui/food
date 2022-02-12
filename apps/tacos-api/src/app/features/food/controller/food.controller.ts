import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { Food } from '../models/food.schema';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  async add(@Body('food') body: Food): Promise<string> {
    return (await this.foodService.create(body)).id;
  }

  @Get()
  async getAll(): Promise<Food[]> {
    return await this.foodService.readAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Food> {
    return await this.foodService.read(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body('food') food: Food): Promise<void> {
    return await this.foodService.update(id, food);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    return await this.foodService.delete(id);
  }
}
