import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import { FoodService } from '../service/food.service';
describe('FoodController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [FoodService]
    }).compile();
  });
});
