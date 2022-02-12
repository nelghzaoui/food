import { Injectable, NotFoundException } from '@nestjs/common';
import { EnforceDocument, Model } from 'mongoose';

@Injectable()
export class CoreService {
  protected async find<T>(model: Model<T>, id: string): Promise<T> {
    let result: EnforceDocument<T, {}>;

    try {
      result = await model.findById(id).exec();
    } catch (error) {
      throw new NotFoundException();
    }

    return result;
  }
}
