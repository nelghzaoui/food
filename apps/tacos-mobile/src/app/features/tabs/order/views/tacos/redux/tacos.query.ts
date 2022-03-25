import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';
import { FoodCategory } from '@food/shared/models/food';
import { CoreQuery } from '../../../../../../core/redux/core.query';
import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';
import { TacosState, TacosStore } from './tacos.store';

@Injectable()
export class TacosQuery extends QueryEntity<TacosState> {
  currentStep$ = this.select('currentStep');
  styles$ = this.select('styles');
  sizes$ = this.select('sizes');
  meats$ = this.select('meats');
  sauces$ = this.select('sauces');
  garnishes$ = this.select('garnishes');
  gratins$ = this.select('gratins');

  constructor(protected store: TacosStore, private readonly coreQuery: CoreQuery) {
    super(store);
    this.getStyles();
  }

  private getStyles() {
    this.coreQuery.foods$
      .pipe(map((foods: MobileFood[]) => foods.filter((r) => r.category === FoodCategory.STYLE)))
      .subscribe((foods) => this.store.update({ styles: foods }));
  }
}
