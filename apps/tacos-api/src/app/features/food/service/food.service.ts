import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoreService } from '../../../core/service/core.service';
import { Food } from '../models/food.schema';

@Injectable()
export class FoodService extends CoreService {
  constructor(@InjectModel(Food.name) private readonly foodModel: Model<Food>) {
    super();
  }

  async create(food: Food): Promise<Food> {
    const result = await new this.foodModel(food).save();

    return result;
  }

  async readAll(): Promise<Food[]> {
    const foods = await this.foodModel.find().exec();

    return foods;
  }

  async read(id: string): Promise<Food> {
    const food: Food = await super.find(this.foodModel, id);

    return food;
  }

  async update(id: string, params: Food): Promise<void> {
    const food: Food = await super.find(this.foodModel, id);

    if (!params) {
      throw new NotAcceptableException();
    }

    if (params.name) food.name = params.name;

    food.save();
  }

  async delete(id: string): Promise<void> {
    const result = await this.foodModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find alert.');
    }
  }
}
