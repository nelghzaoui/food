import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { TacosCategory } from '@food/shared/models/food';
import { take } from 'rxjs';
import { ApiService } from '../../../../../../core/services/api/api.service';
import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';
import { TacosState, TacosStore } from '../redux/tacos.store';
import { TacosServiceFacade } from './tacos.api';

@Injectable()
export class TacosService implements TacosServiceFacade {
  private readonly TACOS_API = 'tacos';

  constructor(private readonly apiService: ApiService, private readonly tacosStore: TacosStore) {}

  init() {
    return this.apiService
      .get<MobileFood[]>(this.TACOS_API)
      .pipe(take(1))
      .subscribe((items: MobileFood[]) => {
        items.map((item: MobileFood) => {
          this.filterByCategory(items, item.category as TacosCategory);
        });
      });
  }

  private filterByCategory(foods: MobileFood[], category: TacosCategory) {
    const categories = this.getMappedCategories(category);
    const filteredFoods = foods.filter((food: MobileFood) => food.category === category);

    this.update({ [categories]: filteredFoods });
  }

  private getMappedCategories(category: TacosCategory) {
    const categories = {
      [TacosCategory.SIZE]: 'sizes',
      [TacosCategory.SAUCE]: 'sauces',
      [TacosCategory.MEAT]: 'meats',
      [TacosCategory.GARNISH]: 'garnishes',
      [TacosCategory.GRATIN]: 'gratins'
    };

    return categories[category];
  }

  private handleTacosItems(items: MobileFood[]) {
    const sizes = items.filter((item) => item.category === TacosCategory.SAUCE);

    this.tacosStore.update({ sizes });
  }

  @transaction()
  update(value: Partial<TacosState>) {
    this.tacosStore.update(value);
  }

  reset(): void {
    this.tacosStore.reset();
  }
}
