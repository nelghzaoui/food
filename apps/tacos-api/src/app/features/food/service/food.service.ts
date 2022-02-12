import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoreService } from '../../../core/service/core.service';
import { Food } from '@food/shared/models/food';
import { Foods } from '../models/food.schema';

@Injectable()
export class FoodService extends CoreService {
  constructor(@InjectModel(Foods.name) private readonly foodModel: Model<Foods>) {
    super();
  }

  async create(food: Food): Promise<string> {
    const result = await new this.foodModel(food).save();

    return result._id;
  }

  async readAll(): Promise<Food[]> {
    return await this.foodModel.find().exec();
  }

  async read(id: string): Promise<Food> {
    return await super.find(this.foodModel, id);
  }

  async update(id: string, params: Food): Promise<Food> {
    const food = await super.find(this.foodModel, id);

    for (const key of Object.keys(params)) {
      if (key) {
        food[key] = params[key];
      }
    }

    return food.save();
  }

  async delete(_id: string): Promise<number> {
    return (await this.foodModel.deleteOne({ _id }).exec()).n;
  }
}
