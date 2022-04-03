import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoreService } from '../../../core/service/core.service';
import { Food } from '@food/shared/models/food';
import { Tacos } from '../models/tacos.schema';

@Injectable()
export class TacosService extends CoreService {
  constructor(@InjectModel(Tacos.name) private readonly tacosModel: Model<Tacos>) {
    super();
  }

  async readAll(): Promise<Food[]> {
    return await this.tacosModel.find().exec();
  }
}
