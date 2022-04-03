import { Controller, Get, NotFoundException } from '@nestjs/common';
import { Food } from '@food/shared/models/food';
import { TacosService } from '../services/tacos.service';

@Controller('tacos')
export class TacosController {
  constructor(private readonly tacosService: TacosService) {}

  @Get()
  async getSizes(): Promise<Food[]> {
    const foods = await this.tacosService.readAll();

    if (foods.length > 0) {
      return foods;
    }
    throw new NotFoundException();
  }
}
