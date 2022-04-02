import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food } from '@food/shared/models/food';
import { CoreService } from '../../../core/service/core.service';
import { Tacos } from '../models/tacos.schema';
import { TacosCategory } from '../models/tacos-category.interface';

@Injectable()
export class TacosService extends CoreService {
  constructor(@InjectModel(Tacos.name) private readonly tacosModel: Model<Tacos>) {
    super();
    this.readSizes();
  }

  async readSizes() {
    const items = await this.readAll();

    const sizes = items.filter((i) => i.category === TacosCategory.SIZE);

    console.log(sizes);

    return sizes;
  }

  async readAll(): Promise<any[]> {
    return await this.tacosModel.find().exec();
  }
}
