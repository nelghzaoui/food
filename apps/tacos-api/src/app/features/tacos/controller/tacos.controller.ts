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
import { TacosService } from '../service/tacos.service';
import { Food } from '@food/shared/models/food';

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
