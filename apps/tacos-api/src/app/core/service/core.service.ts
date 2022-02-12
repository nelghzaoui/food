import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CoreService {
  constructor() {}

  protected async find<T>(model: Model<T>, id: string): Promise<T> {
    let _model: any;

    try {
      _model = await model.findById(id).exec();
    } catch (error) {
      throw new NotFoundException();
    }

    return _model;
  }
}
