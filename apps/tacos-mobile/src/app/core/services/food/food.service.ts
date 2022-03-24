import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { CoreStore } from '../../redux/core.store';
import { ApiService } from '../api/api.service';
import { MobileFood } from './models/mobile-food.interface';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private readonly FOOD_API = 'food';

  constructor(private readonly apiService: ApiService, private readonly coreStore: CoreStore) {}

  init() {
    return this.apiService
      .get<MobileFood[]>(this.FOOD_API)
      .pipe(take(1))
      .subscribe((foods: MobileFood[]) => this.coreStore.update({ foods }));
  }
}
