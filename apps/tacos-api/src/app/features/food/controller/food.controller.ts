import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { Food } from '@food/shared/models/food';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  async add(@Body('food') food: Food): Promise<string> {
    if (food && food.name && food.category) {
      return await this.foodService.create(food);
    }
    throw new BadRequestException();
  }

  @Get()
  async getAll(): Promise<Food[]> {
    const foods = await this.foodService.readAll();

    if (foods.length > 0) {
      return foods;
    }
    throw new NotFoundException();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Food> {
    return await this.foodService.read(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body('food') food: Food): Promise<Food> {
    if (id && food) {
      return await this.foodService.update(id, food);
    }
    throw new BadRequestException();
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    if (id) {
      if ((await this.foodService.delete(id)) === 0) {
        throw new NotFoundException();
      }
      return;
    }
    throw new BadRequestException();
  }
}
