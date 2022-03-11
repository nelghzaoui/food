import { Injectable, NotFoundException } from '@nestjs/common';
import { HydratedDocument, Model } from 'mongoose';

@Injectable()
export class CoreService {
  protected async find<T>(model: Model<T>, id: string): Promise<HydratedDocument<T>> {
    let result: HydratedDocument<T>;

    try {
      result = await model.findById(id).exec();
    } catch (error) {
      throw new NotFoundException();
    }

    return result;
  }
}
